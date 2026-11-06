import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-right-to-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRightToArc = icon("ArrowRightToArc", "arrow-right-to-arc", {
  nodes: [
    ["path", { d: "M3 12h12" }, { r: "bounce", x: 1, y: 0, a: 2, o: [9, 12] }],
    ["path", { d: "M11 8l4 4l-4 4" }, { r: "bounce", x: 1, y: 0, a: 2, o: [9, 12] }],
    ["path", { d: "M12 21a9 9 0 0 0 0 -18" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
