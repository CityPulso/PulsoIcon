import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const here = path.dirname(fileURLToPath(import.meta.url));
const packages = path.resolve(here, "..");

// The tests run the ng-packagr output (partial Ivy, linked at runtime by @angular/compiler), so `npm run build` comes first.
export default defineConfig({
  resolve: {
    alias: [
      { find: /^pulsoicon-angular$/, replacement: path.join(here, "dist", "fesm2022", "pulsoicon-angular.mjs") },
      { find: /^pulsoicon-angular\/(all|names)$/, replacement: path.join(here, "dist", "fesm2022", "pulsoicon-angular-$1.mjs") },
      { find: /^pulsoicon-core$/, replacement: path.join(packages, "core", "src", "index.ts") },
      { find: /^pulsoicon-core\/(.*)$/, replacement: path.join(packages, "core", "src", "$1") },
    ],
  },
  test: { environment: "node", include: ["tests/**/*.test.ts"] },
});
