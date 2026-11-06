import type { PluginOption, UserConfig } from "vite";
import type { FrameworkEnum } from "./frameworks.ts";

import path from "node:path";
import { fileURLToPath } from "node:url";

import { FRAMEWORKS } from "./frameworks.ts";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const src = (pkg: string, file: string) => path.join(repo, "packages", pkg, "src", file);

/** One preview's Vite config: its folder as the root, its own port, and every package read from source. */
export function previewConfig(framework: FrameworkEnum, plugins: PluginOption[]): UserConfig {
  const { port } = FRAMEWORKS.find((f) => f.id === framework)!;
  return {
    root: path.join(repo, "preview", framework),
    plugins,
    resolve: {
      alias: ["core", "react", "vue", "svelte"].flatMap((pkg) => [
        { find: new RegExp(`^pulsoicon-${pkg}$`), replacement: src(pkg, "index.ts") },
        { find: new RegExp(`^pulsoicon-${pkg}/(.*)$`), replacement: src(pkg, "$1") },
      ]),
    },
    server: { port, strictPort: true, host: true },
  };
}
