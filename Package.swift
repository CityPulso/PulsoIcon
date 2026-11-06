// swift-tools-version: 6.0
import PackageDescription

// PulsoIcon for SwiftUI: the same icons, props and motion as the npm package `pulsoicon` (React).
// swift/Sources/PulsoIcon/Icons is generated from packages/core by scripts/gen.ts; the runtime (recipes + view) is hand-written.
// The icon data and recipes build on Linux too (the tests run there); the view needs SwiftUI.
let package = Package(
    name: "PulsoIcon",
    platforms: [.iOS(.v17), .macOS(.v14), .tvOS(.v17), .watchOS(.v10), .visionOS(.v1)],
    products: [
        .library(name: "PulsoIcon", targets: ["PulsoIcon"]),
    ],
    dependencies: [
        .package(url: "https://github.com/nicklockwood/SVGPath.git", from: "1.3.1"),
    ],
    targets: [
        .target(name: "PulsoIcon", dependencies: ["SVGPath"], path: "swift/Sources/PulsoIcon"),
        .testTarget(
            name: "PulsoIconTests",
            dependencies: ["PulsoIcon", "SVGPath"],
            path: "swift/Tests/PulsoIconTests",
            resources: [.copy("Fixtures/parity.txt")]
        ),
    ]
)
