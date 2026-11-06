import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-bar-to-right-dashed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBarToRightDashed = icon("ArrowBarToRightDashed", "arrow-bar-to-right-dashed", {
  nodes: [
    ["path", { d: "M14 12l-10 0" }, { r: "bounce", x: 1, y: 0, a: 2, o: [9, 12] }],
    ["path", { d: "M14 12l-4 4" }, { r: "bounce", x: 1, y: 0, a: 2, o: [9, 12] }],
    ["path", { d: "M14 12l-4 -4" }, { r: "bounce", x: 1, y: 0, a: 2, o: [9, 12] }],
    ["path", { d: "M20 4l0 3m0 13l0 -3m0 -3.5l0 -3" }, { r: "fade", d: 0.15, o: [20, 12] }],
  ],
});
