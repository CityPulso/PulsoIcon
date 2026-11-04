import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-curve-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowCurveLeft = createIcon("ArrowCurveLeft", "arrow-curve-left", {
  nodes: [
    ["path", { d: "M14 7l-4 -4l-4 4" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [10, 5] }],
    ["path", { d: "M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394" }, { r: "drawBack", o: [13, 12] }],
  ],
});
