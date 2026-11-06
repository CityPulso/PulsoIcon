import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-rotary-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryRight = icon("ArrowRotaryRight", "arrow-rotary-right", {
  nodes: [
    ["path", { d: "M5 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", o: [8, 7] }],
    ["path", { d: "M8 10v10" }, { r: "draw", o: [8, 15] }],
    ["path", { d: "M17 11l4 -4l-4 -4" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [19, 7] }],
    ["path", { d: "M11 7h10" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [16, 7] }],
  ],
});
