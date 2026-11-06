// prepack of every npm package: the repository's README and LICENSE, with the README's relative links made absolute
// (npm renders the README outside the repository).
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = "https://raw.githubusercontent.com/CityPulso/PulsoIcon/main/";
const BLOB = "https://github.com/CityPulso/PulsoIcon/blob/main/";
const readme = readFileSync(path.join(root, "README.md"), "utf8")
  .replace(/(src|href)="\.\/([^"]+\.(png|gif|svg))"/g, `$1="${RAW}$2"`)
  .replace(/\]\(\.\/([^)]+)\)/g, `](${BLOB}$1)`);
writeFileSync(path.join(process.cwd(), "README.md"), readme);
copyFileSync(path.join(root, "LICENSE"), path.join(process.cwd(), "LICENSE"));
