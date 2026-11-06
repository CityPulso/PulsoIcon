import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-rotary-first-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryFirstLeft = icon("ArrowRotaryFirstLeft", "arrow-rotary-first-left", {
  nodes: [
    ["path", { d: "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" }, { r: "spin", o: [16, 7] }],
    ["path", { d: "M16 10v10" }, { r: "draw", o: [16, 15] }],
    ["path", { d: "M13.5 9.5l-8.5 8.5" }, { r: "slide", d: 0.15, x: -1, y: 1, a: 1.5, o: [9, 14] }],
    ["path", { d: "M10 18h-5v-5" }, { r: "slide", d: 0.15, x: -1, y: 1, a: 1.5, o: [7.5, 15.5] }],
  ],
});
