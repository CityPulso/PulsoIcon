import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-rotary-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryLeft = icon("ArrowRotaryLeft", "arrow-rotary-left", {
  nodes: [
    ["path", { d: "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" }, { r: "spin", o: [16, 7] }],
    ["path", { d: "M16 10v10" }, { r: "draw", o: [16, 15] }],
    ["path", { d: "M13 7h-10" }, { r: "slide", d: 0.15, x: -1, a: 1.5, o: [8, 7] }],
    ["path", { d: "M7 11l-4 -4l4 -4" }, { r: "slide", d: 0.15, x: -1, a: 1.5, o: [5, 7] }],
  ],
});
