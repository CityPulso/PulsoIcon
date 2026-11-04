import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "trending-up-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrendingUp2 = createIcon("TrendingUp2", "trending-up-2", {
  nodes: [
    ["path", { d: "M18 5l3 3l-3 3" }, { r: "slide", d: 0.35, x: 1, a: 1.5, o: [19.5, 8] }],
    ["path", { d: "M3 18h5l7 -10h6" }, { r: "draw" }],
  ],
});
