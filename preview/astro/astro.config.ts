import { defineConfig } from "astro/config";

import { FrameworkEnum } from "../shared/frameworks";
import { PACKAGE_ALIASES, PORTS_DEFINE, previewPort } from "../shared/vite";

/** The Astro gallery: one server-rendered page per first letter, every package read from source. */
export default defineConfig({
  srcDir: "./src",
  server: { port: previewPort(FrameworkEnum.ASTRO), host: true },
  devToolbar: { enabled: false },
  vite: { resolve: { alias: PACKAGE_ALIASES }, define: PORTS_DEFINE },
});
