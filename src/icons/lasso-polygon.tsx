import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lasso-polygon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LassoPolygon = createIcon("LassoPolygon", "lasso-polygon", {
  nodes: [
    ["path", { d: "M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255" }, { r: "draw" }],
    ["path", { d: "M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "swing", d: 0.2, a: 12, o: [5, 15] }],
    ["path", { d: "M5 17c0 1.42 .316 2.805 1 4" }, { r: "swing", d: 0.2, a: 12, o: [5, 15] }],
  ],
});
