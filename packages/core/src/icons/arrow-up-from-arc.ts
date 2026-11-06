import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-up-from-arc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowUpFromArc = icon("ArrowUpFromArc", "arrow-up-from-arc", {
  nodes: [
    ["path", { d: "M12 9v12" }, { r: "shoot", x: 0, y: 1, a: 3, o: [12, 15] }],
    ["path", { d: "M8 17l4 4l4 -4" }, { r: "shoot", x: 0, y: 1, a: 3, o: [12, 15] }],
    ["path", { d: "M21 12a9 9 0 0 0 -18 0" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
