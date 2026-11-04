import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      { find: /^pulsoicon$/, replacement: path.join(root, "src", "index.ts") },
      { find: /^pulsoicon\/(.*)$/, replacement: path.join(root, "src", "$1") },
    ],
  },
  test: { environment: "node", include: ["tests/**/*.test.{ts,tsx}"] },
});
