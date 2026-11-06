import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { FrameworkEnum } from "../shared/frameworks.js";
import { previewConfig } from "../shared/vite.js";

export default defineConfig(previewConfig(FrameworkEnum.REACT, [react()]));
