import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const packages = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export default defineConfig({
  resolve: {
    alias: [
      { find: /^pulsoicon-preact$/, replacement: path.join(packages, "preact", "src", "index.ts") },
      { find: /^pulsoicon-preact\/(.*)$/, replacement: path.join(packages, "preact", "src", "$1") },
      { find: /^pulsoicon-core$/, replacement: path.join(packages, "core", "src", "index.ts") },
      { find: /^pulsoicon-core\/(.*)$/, replacement: path.join(packages, "core", "src", "$1") },
    ],
  },
  test: { environment: "node", include: ["tests/**/*.test.{ts,tsx}"] },
});
