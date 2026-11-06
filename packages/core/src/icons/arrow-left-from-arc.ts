import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-left-from-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowLeftFromArc = icon("ArrowLeftFromArc", "arrow-left-from-arc", {
  nodes: [
    ["path", { d: "M9 12h12" }, { r: "shoot", x: 1, y: 0, a: 3, o: [15, 12] }],
    ["path", { d: "M17 16l4 -4l-4 -4" }, { r: "shoot", x: 1, y: 0, a: 3, o: [15, 12] }],
    ["path", { d: "M12 3a9 9 0 1 0 0 18" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
