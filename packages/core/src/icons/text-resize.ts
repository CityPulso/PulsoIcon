import { icon } from "../icon.js";

// Adapted from Tabler Icons "text-resize" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextResize = icon("TextResize", "text-resize", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1 }],
    ["path", { d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1 }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "slide", d: 0.05, x: -1, y: 1, a: 1 }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "slide", d: 0.05, x: 1, y: 1, a: 1 }],
    ["path", { d: "M5 7v10" }],
    ["path", { d: "M7 5h10" }],
    ["path", { d: "M7 19h10" }],
    ["path", { d: "M19 7v10" }],
    ["path", { d: "M10 10h4" }, { r: "draw" }],
    ["path", { d: "M12 14v-4" }, { r: "draw", d: 0.15 }],
  ],
});
