import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-bounce" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBounce = createIcon("ArrowBounce", "arrow-bounce", {
  nodes: [
    ["path", { d: "M10 18h4" }, { r: "press", a: 0.2, o: [12, 18] }],
    ["path", { d: "M3 8a9 9 0 0 1 9 9v1l1.428 -4.285a12 12 0 0 1 6.018 -6.938l.554 -.277" }, { r: "draw", o: [12, 13] }],
    ["path", { d: "M15 6h5v5" }, { r: "slide", d: 0.3, x: 1, y: -1, a: 1.5, o: [17.5, 8.5] }],
  ],
});
