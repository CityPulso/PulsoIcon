import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-rotary-last-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryLastRight = createIcon("ArrowRotaryLastRight", "arrow-rotary-last-right", {
  nodes: [
    ["path", { d: "M6 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", o: [9, 12] }],
    ["path", { d: "M9 15v6" }, { r: "draw", o: [9, 18] }],
    ["path", { d: "M11.5 9.5l6.5 -6.5" }, { r: "slide", d: 0.15, x: 1, y: -1, a: 1.5, o: [15, 6] }],
    ["path", { d: "M13 3h5v5" }, { r: "slide", d: 0.15, x: 1, y: -1, a: 1.5, o: [16, 5.5] }],
  ],
});
