import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cash-coin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CashCoin = createIcon("CashCoin", "cash-coin", {
  nodes: [
    ["path", { d: "M14.273 10.042a3 3 0 1 0 -3.282 4.784" }],
    ["path", { d: "M11 18h-6a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v2.5" }],
    ["path", { d: "M6 12h.01" }],
    ["path", { d: "M14 15c0 1.105 1.79 2 4 2s4 -.895 4 -2s-1.79 -2 -4 -2s-4 .895 -4 2" }, { r: "drop", y: -1, a: 4 }],
    ["path", { d: "M14 15v3c0 1.105 1.79 2 4 2s4 -.895 4 -2v-3" }, { r: "drop", y: -1, a: 4 }],
  ],
});
