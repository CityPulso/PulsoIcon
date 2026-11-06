import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

import { FrameworkEnum } from "../shared/frameworks.ts";
import { previewConfig } from "../shared/vite.ts";

export default defineConfig(previewConfig(FrameworkEnum.SVELTE, [svelte({ preprocess: vitePreprocess() })]));
