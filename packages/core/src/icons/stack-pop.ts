import { icon } from "../icon.js";

// Adapted from Tabler Icons "stack-pop" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackPop = icon("StackPop", "stack-pop", {
  nodes: [
    ["path", { d: "M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" }, { r: "float", d: 0.1, a: 1 }],
    ["path", { d: "M4 15l8 4l8 -4" }],
    ["path", { d: "M12 11v-7" }, { r: "shoot", y: -1, a: 4 }],
    ["path", { d: "M9 7l3 -3l3 3" }, { r: "shoot", y: -1, a: 4 }],
  ],
});
