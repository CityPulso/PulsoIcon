/** Kotlin (Jetpack Compose) icon files for kotlin/pulsoicon: one lazily built `PulsoIcons.<Name>` per icon, aliases, `ICON_NAMES` and `byKey`. */
import type { IconData, IconMotion } from "../packages/core/src/index.js";
import type { NativeIcon, NativeShape } from "./native.js";

import { exportNames, HEADER, writeTree } from "./gen.js";
import { decimal, nativeIcon, parityFixture } from "./native.js";

const PKG = "com.citypulso.pulsoicon";
const DIR = "kotlin/pulsoicon/src/main/java/com/citypulso/pulsoicon/icons";
/** Lookup chunks: one `when` per chunk keeps every method under the JVM's 64 KB limit. */
const CHUNK = 400;
/** String constants stay under the class file's 65535-byte limit. */
const KEYS_PER_STRING = 2500;

const f = (v: number) => `${decimal(v)}f`;
const floats = (vs: number[]) => `floatArrayOf(${vs.map(f).join(", ")})`;
const str = (s: string) => `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\$/g, "\\$")}"`;
const recipe = (r: string) => `Recipe.${r[0].toUpperCase()}${r.slice(1)}`;
const fileOf = (key: string) => key.replace(/-/g, "_");
const jvmName = (key: string) => `PulsoIcon_${fileOf(key)}`;

function motion(m: IconMotion): string {
  const args = [recipe(m.r)];
  for (const k of ["d", "x", "y", "a"] as const) if (m[k]) args.push(`${k} = ${f(m[k])}`);
  if (m.o) args.push(`ox = ${f(m.o[0])}`, `oy = ${f(m.o[1])}`);
  return `IconMotion(${args.join(", ")})`;
}

function call(s: NativeShape, solid: boolean): string {
  const args: string[] = [];
  if (s.tag === "path") args.push(str(s.d!));
  else if (s.tag === "polyline" || s.tag === "polygon") args.push(floats(s.points!));
  else args.push(...s.numbers.map(f));
  if (s.motion) args.push(`motion = ${motion(s.motion)}`);
  if (s.fill !== undefined) args.push(`fill = ${s.fill}`);
  if (s.stroke !== undefined) args.push(`stroke = ${s.stroke}`);
  if (s.dash) args.push(`dash = ${floats(s.dash)}`);
  if (s.matrix) args.push(`matrix = ${floats(s.matrix)}`);
  if (solid && s.role !== "fill") args.push(`role = SolidRole.${s.role[0].toUpperCase()}${s.role.slice(1)}`);
  return `${s.tag}(${args.join(", ")})`;
}

function iconFile({ data, outline, solid }: NativeIcon): string {
  const cache = `_${data.name[0].toLowerCase()}${data.name.slice(1)}`;
  const svg = data.svg ? `, svg = ${motion(data.svg)}` : "";
  const moves = [...outline, ...solid].some((s) => s.motion) || !!data.svg;
  const imports = [...(moves ? ["IconMotion"] : []), "PulsoIconSpec", "PulsoIcons", ...(moves ? ["Recipe"] : []), ...(solid.some((s) => s.role !== "fill") ? ["SolidRole"] : []), "icon"];
  return [
    HEADER,
    `@file:JvmName("${jvmName(data.key)}")`,
    "",
    `package ${PKG}.icons`,
    "",
    ...imports.map((i) => `import ${PKG}.${i}`),
    "",
    `private var ${cache}: PulsoIconSpec? = null`,
    "",
    `val PulsoIcons.${data.name}: PulsoIconSpec`,
    `    get() = ${cache} ?: icon(${str(data.name)}, ${str(data.key)}${svg}, outline = {`,
    ...outline.map((s) => `        ${call(s, false)}`),
    "    }, solid = {",
    ...solid.map((s) => `        ${call(s, true)}`),
    `    }).also { ${cache} = it }`,
    "",
  ].join("\n");
}

function aliasFiles(icons: IconData[]): Map<string, string> {
  const lines = icons.flatMap((i) => exportNames(i).filter((n) => n !== i.name).map((n) => `val PulsoIcons.${n}: PulsoIconSpec get() = PulsoIcons.${i.name}`));
  const files = new Map<string, string>();
  for (let c = 0; c * 2000 < lines.length; c++) {
    files.set(
      `Aliases${c}.kt`,
      [
        HEADER,
        `@file:JvmName("PulsoIconAliases${c}")`,
        "",
        `package ${PKG}.icons`,
        "",
        `import ${PKG}.PulsoIconSpec`,
        `import ${PKG}.PulsoIcons`,
        "",
        "// Other names an icon answers to (the React package's aliases), each also with an `Icon` suffix.",
        ...lines.slice(c * 2000, (c + 1) * 2000),
        "",
      ].join("\n"),
    );
  }
  return files;
}

function allFile(icons: IconData[]): string {
  const keys = icons.map((i) => i.key);
  const strings: string[] = [];
  for (let i = 0; i < keys.length; i += KEYS_PER_STRING) strings.push(keys.slice(i, i + KEYS_PER_STRING).join(" "));
  const chunks: IconData[][] = [];
  for (let i = 0; i < icons.length; i += CHUNK) chunks.push(icons.slice(i, i + CHUNK));
  return [
    HEADER,
    '@file:JvmName("PulsoIconAll")',
    "",
    `package ${PKG}.icons`,
    "",
    `import ${PKG}.PulsoIconSpec`,
    `import ${PKG}.PulsoIcons`,
    "",
    "private val names: List<String> by lazy {",
    "    listOf(",
    ...strings.map((s) => `        ${str(s)},`),
    '    ).flatMap { it.split(" ") }',
    "}",
    "",
    "/** Every icon key (kebab-case, shared with every package: `pulsoicon/names`), in key order. */",
    "val PulsoIcons.ICON_NAMES: List<String> get() = names",
    "",
    "/** Every icon by key. Builds all of them; prefer [byKey] for a single lookup. */",
    "val PulsoIcons.ICONS: Map<String, PulsoIconSpec> get() = names.associateWith { byKey(it)!! }",
    "",
    "/** First key of each lookup chunk. */",
    `private val chunkStarts = arrayOf(${chunks.map((c) => str(c[0].key)).join(", ")})`,
    "",
    "/** The icon stored under [key] (e.g. a venue amenity), or null for an unknown key. */",
    "fun PulsoIcons.byKey(key: String): PulsoIconSpec? {",
    "    val found = chunkStarts.binarySearch(key)",
    "    return when (if (found >= 0) found else -found - 2) {",
    ...chunks.map((_, c) => `        ${c} -> chunk${c}(key)`),
    "        else -> null",
    "    }",
    "}",
    "",
  ].join("\n");
}

/** One lookup chunk per file: a single class referring to every icon would overflow its constant pool. */
function lookupFiles(icons: IconData[]): Map<string, string> {
  const files = new Map<string, string>();
  for (let c = 0; c * CHUNK < icons.length; c++) {
    files.set(
      `Lookup${c}.kt`,
      [
        HEADER,
        `@file:JvmName("PulsoIconLookup${c}")`,
        "",
        `package ${PKG}.icons`,
        "",
        `import ${PKG}.PulsoIconSpec`,
        `import ${PKG}.PulsoIcons`,
        "",
        `internal fun chunk${c}(key: String): PulsoIconSpec? = when (key) {`,
        ...icons.slice(c * CHUNK, (c + 1) * CHUNK).map((i) => `    ${str(i.key)} -> PulsoIcons.${i.name}`),
        "    else -> null",
        "}",
        "",
      ].join("\n"),
    );
  }
  return files;
}

export function genKotlin(icons: IconData[], check: boolean): string[] {
  const native = icons.map(nativeIcon);
  const files = new Map<string, string>();
  for (const icon of native) files.set(`${fileOf(icon.data.key)}.kt`, iconFile(icon));
  for (const [name, text] of aliasFiles(icons)) files.set(name, text);
  files.set("All.kt", allFile(icons));
  for (const [name, text] of lookupFiles(icons)) files.set(name, text);
  const stale = writeTree(DIR, files, check);
  stale.push(...writeTree("kotlin/pulsoicon/src/test/resources", new Map([["parity.txt", parityFixture(native)]]), check));
  return stale;
}
