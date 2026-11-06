import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-rotary-first-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryFirstRight = icon("ArrowRotaryFirstRight", "arrow-rotary-first-right", {
  nodes: [
    ["path", { d: "M5 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", o: [8, 7] }],
    ["path", { d: "M8 10v10" }, { r: "draw", o: [8, 15] }],
    ["path", { d: "M10.5 9.5l8.5 8.5" }, { r: "slide", d: 0.15, x: 1, y: 1, a: 1.5, o: [15, 14] }],
    ["path", { d: "M14 18h5v-5" }, { r: "slide", d: 0.15, x: 1, y: 1, a: 1.5, o: [16.5, 15.5] }],
  ],
});
