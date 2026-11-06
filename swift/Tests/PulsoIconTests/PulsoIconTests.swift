import Foundation
import SVGPath
import Testing
@testable import PulsoIcon

/// Checks the generated icons and the hand-ported recipes against pulsoicon-core, through the fixture scripts/gen.ts
/// writes from it (Fixtures/parity.txt).
@Suite struct PulsoIconTests {
    let fixture: [[String]] = {
        let url = Bundle.module.url(forResource: "parity", withExtension: "txt")!
        return try! String(contentsOf: url, encoding: .utf8).split(separator: "\n").map { $0.split(separator: " ").map(String.init) }
    }()

    @Test func everyIconMatchesCore() throws {
        let icons = fixture.filter { $0[0] == "icon" }
        #expect(icons.map { $0[1] } == PulsoIcon.iconNames)
        for row in icons {
            let key = row[1]
            let icon = try #require(PulsoIcon.byKey(key), "\(key)")
            #expect(icon.key == key)
            #expect(icon.name == row[2])
            #expect((icon.svg?.recipe.rawValue ?? "-") == row[3], "\(key)")
            #expect(icon.nodes.count == Int(row[4]), "\(key)")
            #expect(icon.solid.filter { $0.role == .fill }.count == Int(row[5]), "\(key) solid fills")
            #expect(icon.solid.filter { $0.role == .cut }.count == Int(row[6]), "\(key) solid cuts")
            #expect(icon.solid.filter { $0.role == .line }.count == Int(row[7]), "\(key) solid lines")
            #expect(icon.nodes.map { $0.motion?.recipe.rawValue ?? "-" }.joined(separator: ",") == row[8], "\(key)")
            #expect(icon.duration(solid: false) > 0 && icon.duration(solid: true) > 0, "\(key) plays for no time")
        }
    }

    @Test func everyPathParses() throws {
        for key in PulsoIcon.iconNames {
            let icon = try #require(PulsoIcon.byKey(key))
            for node in icon.nodes + icon.solid {
                if case let .path(d) = node.shape { _ = try SVGPath(string: d) }
            }
        }
    }

    @Test func recipesMatchCore() throws {
        let rows = fixture.filter { $0[0] == "track" }
        #expect(Set(rows.map { $0[1] }) == Set(Recipe.allCases.map(\.rawValue)))
        for row in rows {
            let recipe = try #require(Recipe(rawValue: row[1]))
            let (d, x, y, a) = (Double(row[2])!, Double(row[3])!, Double(row[4])!, Double(row[5])!)
            let where_ = row[1...6].joined(separator: " ")
            let track = try #require(recipe.tracks(d: d, x: x, y: y, a: a).first { $0.prop.rawValue == row[6] }, "\(where_)")
            #expect(abs(track.duration - Double(row[7])!) < 1e-9, "\(where_)")
            #expect(abs(track.delay - Double(row[8])!) < 1e-9, "\(where_)")
            let curve = row[9].split(separator: ",").map { Double($0)! }
            #expect([track.curve.x1, track.curve.y1, track.curve.x2, track.curve.y2] == curve, "\(where_)")
            let values = row[10].split(separator: ",").map { Double($0)! }
            #expect(track.values.count == values.count && zip(track.values, values).allSatisfy { abs($0 - $1) < 1e-6 }, "\(where_)")
            let times = row[11] == "-" ? nil : row[11].split(separator: ",").map { Double($0)! }
            #expect(track.times == times, "\(where_)")
        }
        // Same set of animated values per call, no more.
        for recipe in Recipe.allCases {
            let expected = Set(rows.filter { $0[1] == recipe.rawValue && $0[2] == "0" && $0[5] == "0" }.map { $0[6] })
            #expect(Set(recipe.tracks(d: 0, x: 0, y: 0, a: 0).map(\.prop.rawValue)) == expected, "\(recipe)")
        }
    }

    @Test func aliasesAndSuffixesPointAtTheIcon() {
        let gear: PulsoIcon = .gear
        let settings: PulsoIcon = .settings
        #expect(gear == settings)
        let bellIcon: PulsoIcon = .bellIcon
        #expect(bellIcon == PulsoIcon.byKey("bell"))
        // Members from every part of the alphabet are visible from another module (one extension per icon hid the later ones).
        let spread: [PulsoIcon] = [.accessibility, .house, .`import`, .settings2, .sun, .zzz]
        #expect(spread.map(\.key) == ["accessibility", "house", "import", "settings-2", "sun", "zzz"])
        #expect(PulsoIcon.byKey("no-such-icon") == nil)
    }
}

#if canImport(SwiftUI) && canImport(AppKit)
import AppKit
import SwiftUI

/// The view draws path shapes inside its square (SVG's y axis points down; a flipped parse leaves the canvas empty).
@MainActor @Suite struct PulsoIconViewRenderTests {
    @Test func pathOnlyIconDrawsInsideTheCanvas() throws {
        let renderer = ImageRenderer(content: PulsoIconView(.chevronRight, size: 48, color: .black, animated: false))
        renderer.scale = 1
        let image = try #require(renderer.cgImage)
        let rep = NSBitmapImageRep(cgImage: image)
        var inked = 0
        for x in 0 ..< rep.pixelsWide {
            for y in 0 ..< rep.pixelsHigh where (rep.colorAt(x: x, y: y)?.alphaComponent ?? 0) > 0.5 { inked += 1 }
        }
        #expect(inked > 20, "chevron-right drew \(inked) pixels")
    }
}
#endif
