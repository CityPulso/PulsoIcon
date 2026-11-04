import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-curve-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowCurveRight = createIcon("ArrowCurveRight", "arrow-curve-right", {
  nodes: [
    ["path", { d: "M10 7l4 -4l4 4" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [14, 5] }],
    ["path", { d: "M14 3v4.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v2.394" }, { r: "draw", o: [11, 12] }],
  ],
});
