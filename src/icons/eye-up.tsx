import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eye-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EyeUp = createIcon("EyeUp", "eye-up", {
  nodes: [
    ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.09 .15 -.18 .295 -.27 .439" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", y: -1, a: 2 }],
  ],
});
