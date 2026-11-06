import { icon } from "../icon.js";

// Adapted from Tabler Icons "view-360" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const View360 = icon("View360", "view-360", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M8 12a4 9 0 1 0 8 0a4 9 0 1 0 -8 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4" }, { r: "press", d: 0.1, a: 0.08, o: [12, 12] }],
  ],
});
