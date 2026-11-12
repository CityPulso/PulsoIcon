/**
 * One version for every package: the root package.json's "version".
 *
 *   npm run set-version -- 5.3.0       set it everywhere
 *   npx tsx scripts/version.ts         copy the root version into every package
 *   npx tsx scripts/version.ts --check fail when a package disagrees (CI)
 *
 * npm packages get it in their package.json (and depend on exactly that pulsoicon-core). The Kotlin build reads the
 * root package.json itself; SwiftPM takes it from the git tag the release workflow pushes.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGES = ["core", "react", "vue", "svelte", "solid", "preact", "angular", "astro"];

type Manifest = { name: string; version: string; dependencies?: Record<string, string> };
const read = (file: string) => JSON.parse(readFileSync(path.join(root, file), "utf8")) as Manifest;
const write = (file: string, json: Manifest) => writeFileSync(path.join(root, file), `${JSON.stringify(json, null, 2)}\n`);

const args = process.argv.slice(2);
const check = args.includes("--check");
const next = args.find((a) => !a.startsWith("--"));
if (next && !/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(next)) throw new Error(`not a version: ${next}`);

const top = read("package.json");
if (next) {
  top.version = next;
  write("package.json", top);
}
const wrong: string[] = [];
for (const pkg of PACKAGES) {
  const file = `packages/${pkg}/package.json`;
  const json = read(file);
  const core = json.dependencies?.["pulsoicon-core"];
  if (json.version === top.version && (core === undefined || core === top.version)) continue;
  if (check) {
    wrong.push(`${json.name} ${json.version}${core ? ` (pulsoicon-core ${core})` : ""}`);
    continue;
  }
  json.version = top.version;
  if (core !== undefined) json.dependencies!["pulsoicon-core"] = top.version;
  write(file, json);
}
if (wrong.length) {
  console.error(`Not on ${top.version}: ${wrong.join(", ")} (run npx tsx scripts/version.ts)`);
  process.exit(1);
}
console.log(`version ${top.version}${check ? " everywhere" : ""}`);
