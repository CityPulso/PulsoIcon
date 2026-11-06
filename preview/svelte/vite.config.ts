import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

import { FrameworkEnum } from "../shared/frameworks.js";
import { previewConfig } from "../shared/vite.js";

export default defineConfig(previewConfig(FrameworkEnum.SVELTE, [svelte({ preprocess: vitePreprocess() })]));
