import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { FrameworkEnum } from "../shared/frameworks.ts";
import { previewConfig } from "../shared/vite.ts";

export default defineConfig(previewConfig(FrameworkEnum.REACT, [react()]));
