import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import { FrameworkEnum } from "../shared/frameworks.ts";
import { previewConfig } from "../shared/vite.ts";

export default defineConfig(previewConfig(FrameworkEnum.VUE, [vue()]));
