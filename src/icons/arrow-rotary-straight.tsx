import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-rotary-straight" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryStraight = createIcon("ArrowRotaryStraight", "arrow-rotary-straight", {
  nodes: [
    ["path", { d: "M10 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", o: [13, 13] }],
    ["path", { d: "M13 16v5" }, { r: "draw", o: [13, 18.5] }],
    ["path", { d: "M13 3v7" }, { r: "slide", d: 0.15, y: -1, a: 1.5, o: [13, 6.5] }],
    ["path", { d: "M9 7l4 -4l4 4" }, { r: "slide", d: 0.15, y: -1, a: 1.5, o: [13, 5] }],
  ],
});
