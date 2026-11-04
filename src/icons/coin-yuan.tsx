import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "coin-yuan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CoinYuan = createIcon("CoinYuan", "coin-yuan", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 13h6" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 8l3 4.5" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M15 8l-3 4.5v4.5" }, { r: "flip", o: [12, 12] }],
  ],
});
