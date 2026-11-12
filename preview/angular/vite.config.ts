import { defineConfig } from "vite";

import { FrameworkEnum } from "../shared/frameworks.js";
import { previewConfig } from "../shared/vite.js";

// The app's @Component decorator is run in the browser (JIT), so it is compiled as a legacy TypeScript decorator.
export default defineConfig(previewConfig(FrameworkEnum.ANGULAR, [], { oxc: { decorator: { legacy: true } } }));
