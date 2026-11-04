import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "coin-rupee" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CoinRupee = createIcon("CoinRupee", "coin-rupee", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 11h6" }, { r: "flip", o: [12, 12] }],
  ],
});
