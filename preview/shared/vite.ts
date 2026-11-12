import type { PluginOption, UserConfig } from "vite";
import type { FrameworkEnum } from "./frameworks.js";

import path from "node:path";
import { fileURLToPath } from "node:url";

import { FRAMEWORKS, PORTS } from "./frameworks.js";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const src = (pkg: string, file: string) => path.join(repo, "packages", pkg, "src", file);

/** Every package read from source (Angular from its ng-packagr build, which `npm run preview:angular` makes first). */
export const PACKAGE_ALIASES = [
  { find: /^pulsoicon-astro\/icons\/(.*)$/, replacement: src("astro", "icons/$1.astro") },
  ...["core", "react", "vue", "svelte", "solid", "preact", "astro"].flatMap((pkg) => [
    { find: new RegExp(`^pulsoicon-${pkg}$`), replacement: src(pkg, "index.ts") },
    { find: new RegExp(`^pulsoicon-${pkg}/(.*)$`), replacement: src(pkg, "$1") },
  ]),
  { find: /^pulsoicon-angular$/, replacement: path.join(repo, "packages", "angular", "dist", "fesm2022", "pulsoicon-angular.mjs") },
  { find: /^pulsoicon-angular\/(all|names)$/, replacement: path.join(repo, "packages", "angular", "dist", "fesm2022", "pulsoicon-angular-$1.mjs") },
];

export const previewPort = (framework: FrameworkEnum) => FRAMEWORKS.find((f) => f.id === framework)!.port;

/** Hands the browser the ports the servers run on, so each gallery's header links to the others. */
export const PORTS_DEFINE = { __PULSOICON_PORTS__: JSON.stringify(PORTS) };

/** One preview's Vite config: its folder as the root, its own port, and every package read from source. */
export function previewConfig(framework: FrameworkEnum, plugins: PluginOption[], extra: UserConfig = {}): UserConfig {
  return {
    ...extra,
    define: { ...extra.define, ...PORTS_DEFINE },
    root: path.join(repo, "preview", framework),
    // One optimizer cache per preview and port, so servers running side by side don't invalidate each other's deps.
    cacheDir: path.join(repo, "node_modules", ".vite", `${framework}-${previewPort(framework)}`),
    plugins,
    resolve: { alias: PACKAGE_ALIASES },
    server: { port: previewPort(framework), strictPort: true, host: true },
  };
}
