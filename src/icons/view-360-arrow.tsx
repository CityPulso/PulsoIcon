import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "view-360-arrow" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const View360Arrow = createIcon("View360Arrow", "view-360-arrow", {
  nodes: [
    ["path", { d: "M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" }, { r: "draw" }],
    ["path", { d: "M9 13l3 3l-3 3" }, { r: "slide", d: 0.4, x: -1, y: 0, a: 1.5, o: [10.5, 16] }],
  ],
});
