// prepack of every npm package: the repository's LICENSE (each package keeps its own README.md).
import { copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
copyFileSync(path.join(root, "LICENSE"), path.join(process.cwd(), "LICENSE"));
