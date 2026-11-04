import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "coin-bitcoin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CoinBitcoin = createIcon("CoinBitcoin", "coin-bitcoin", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M10 12h4" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M10 7v10v-9" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M13 7v1" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M13 16v1" }, { r: "flip", o: [12, 12] }],
  ],
});
