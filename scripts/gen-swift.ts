/** Swift (SwiftUI) icon files for swift/Sources/PulsoIcon: one `PulsoIcon.<name>` per icon, aliases, `iconNames` and `byKey`. */
import type { IconData, IconMotion } from "../packages/core/src/index.js";
import type { NativeIcon, NativeShape } from "./native.js";

import { exportNames, HEADER, writeTree } from "./gen.js";
import { decimal, nativeIcon, parityFixture } from "./native.js";

const DIR = "swift/Sources/PulsoIcon/Icons";
const PER_FILE = 50;
const KEYWORDS = new Set(
  "as associatedtype break case catch class continue default defer deinit do else enum extension fallthrough false fileprivate for func guard if import in init inout internal is let nil operator private protocol public repeat rethrows return self static struct subscript super switch throw throws true try typealias var where while Type Self".split(
    " ",
  ),
);
/** Static members PulsoIcon has itself. */
const RESERVED = new Set(["iconNames", "allIcons", "byKey"]);

/** `Bell` → `bell`, `AArrowDown` → `aArrowDown`, `Import` → `` `import` `` (only the first letter is lowered, like the Kotlin names). */
export function swiftName(name: string): string {
  const out = name[0].toLowerCase() + name.slice(1);
  if (RESERVED.has(out)) throw new Error(`${name}: clashes with a PulsoIcon member`);
  return KEYWORDS.has(out) ? `\`${out}\`` : out;
}

const str = (s: string) => `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
const doubles = (vs: number[]) => `[${vs.map(decimal).join(", ")}]`;

function motion(m: IconMotion): string {
  const args = [`.${m.r}`];
  for (const k of ["d", "x", "y", "a"] as const) if (m[k]) args.push(`${k}: ${decimal(m[k])}`);
  if (m.o) args.push(`ox: ${decimal(m.o[0])}`, `oy: ${decimal(m.o[1])}`);
  return `IconMotion(${args.join(", ")})`;
}

function call(s: NativeShape, solid: boolean): string {
  const args: string[] = [];
  if (s.tag === "path") args.push(str(s.d!));
  else if (s.tag === "polyline" || s.tag === "polygon") args.push(doubles(s.points!));
  else if (s.tag === "rect") args.push(...s.numbers.slice(0, 4).map(decimal), `rx: ${decimal(s.numbers[4])}`, `ry: ${decimal(s.numbers[5])}`);
  else args.push(...s.numbers.map(decimal));
  if (s.motion) args.push(`motion: ${motion(s.motion)}`);
  if (s.fill !== undefined) args.push(`fill: ${s.fill}`);
  if (s.stroke !== undefined) args.push(`stroke: ${s.stroke}`);
  if (s.dash) args.push(`dash: ${doubles(s.dash)}`);
  if (s.matrix) args.push(`matrix: ${doubles(s.matrix)}`);
  if (solid && s.role !== "fill") args.push(`role: .${s.role}`);
  return `.${s.tag}(${args.join(", ")})`;
}

function iconDecl({ data, outline, solid }: NativeIcon): string[] {
  const svg = data.svg ? `, svg: ${motion(data.svg)}` : "";
  return [
    `    public static let ${swiftName(data.name)} = PulsoIcon(${str(data.name)}, ${str(data.key)}${svg}, nodes: [`,
    ...outline.map((s) => `        ${call(s, false)},`),
    "    ], solid: [",
    ...solid.map((s) => `        ${call(s, true)},`),
    "    ])",
  ];
}

export function genSwift(icons: IconData[], check: boolean): string[] {
  const native = icons.map(nativeIcon);
  const names = new Map<string, string>();
  for (const i of icons) {
    for (const n of exportNames(i)) {
      const id = swiftName(n).replace(/`/g, "");
      const other = names.get(id);
      if (other) throw new Error(`Swift name ${id} is taken by both ${other} and ${i.key}`);
      names.set(id, i.key);
    }
  }
  const files = new Map<string, string>();
  // A few dozen icons per extension: with one extension per icon (10,000 of them) other modules stop finding the later
  // members. Files are numbered, not named after icons (LetterS / Letters would collide on macOS file systems).
  for (let c = 0; c * PER_FILE < native.length; c++) {
    const chunk = native.slice(c * PER_FILE, (c + 1) * PER_FILE);
    files.set(
      `Icons${String(c).padStart(3, "0")}.swift`,
      [HEADER, `// ${chunk[0].data.key} … ${chunk[chunk.length - 1].data.key}`, "", "extension PulsoIcon {", ...chunk.flatMap((icon, i) => [...(i ? [""] : []), ...iconDecl(icon)]), "}", ""].join("\n"),
    );
  }
  const aliases = icons.flatMap((i) => exportNames(i).filter((n) => n !== i.name).map((n) => `    public static var ${swiftName(n)}: PulsoIcon { .${swiftName(i.name)} }`));
  files.set(
    "Aliases.swift",
    [HEADER, "", "// Other names an icon answers to (the React package's aliases), each also with an `Icon` suffix.", "extension PulsoIcon {", ...aliases, "}", ""].join("\n"),
  );
  files.set(
    "All.swift",
    [
      HEADER,
      "",
      "extension PulsoIcon {",
      "    /// Every icon key (kebab-case, shared with every package: the npm packages' `names`), in key order.",
      "    public static let iconNames: [String] = [",
      ...icons.map((i) => `        ${str(i.key)},`),
      "    ]",
      "",
      "    /// Every icon by key. Builds all of them; prefer `byKey` for a single lookup.",
      "    public static var allIcons: [String: PulsoIcon] { Dictionary(uniqueKeysWithValues: iconNames.compactMap { key in byKey(key).map { (key, $0) } }) }",
      "",
      "    /// The icon stored under `key` (e.g. a venue amenity), or nil for an unknown key.",
      "    public static func byKey(_ key: String) -> PulsoIcon? {",
      "        switch key {",
      ...icons.map((i) => `        case ${str(i.key)}: .${swiftName(i.name)}`),
      "        default: nil",
      "        }",
      "    }",
      "}",
      "",
    ].join("\n"),
  );
  const stale = writeTree(DIR, files, check);
  stale.push(...writeTree("swift/Tests/PulsoIconTests/Fixtures", new Map([["parity.txt", parityFixture(native)]]), check));
  return stale;
}
