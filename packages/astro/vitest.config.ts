/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packages = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export default getViteConfig({
  resolve: {
    alias: [
      { find: /^pulsoicon-astro$/, replacement: path.join(packages, "astro", "src", "index.ts") },
      { find: /^pulsoicon-astro\/(.*)$/, replacement: path.join(packages, "astro", "src", "$1") },
      { find: /^pulsoicon-core$/, replacement: path.join(packages, "core", "src", "index.ts") },
      { find: /^pulsoicon-core\/(.*)$/, replacement: path.join(packages, "core", "src", "$1") },
    ],
  },
  test: { environment: "node", include: ["tests/**/*.test.ts"] },
});
