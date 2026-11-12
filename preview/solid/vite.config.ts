import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

import { FrameworkEnum } from "../shared/frameworks.js";
import { previewConfig } from "../shared/vite.js";

export default defineConfig(previewConfig(FrameworkEnum.SOLID, [solid()]));
