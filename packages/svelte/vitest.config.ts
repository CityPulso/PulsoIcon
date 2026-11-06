import path from "node:path";
import { fileURLToPath } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

const packages = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      { find: /^pulsoicon-svelte$/, replacement: path.join(packages, "svelte", "src", "index.ts") },
      { find: /^pulsoicon-svelte\/(.*)$/, replacement: path.join(packages, "svelte", "src", "$1") },
      { find: /^pulsoicon-core$/, replacement: path.join(packages, "core", "src", "index.ts") },
      { find: /^pulsoicon-core\/(.*)$/, replacement: path.join(packages, "core", "src", "$1") },
    ],
  },
  test: { environment: "node", include: ["tests/**/*.test.{ts,tsx}"] },
});
