import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "receipt-bitcoin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReceiptBitcoin = createIcon("ReceiptBitcoin", "receipt-bitcoin", {
  nodes: [
    ["path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }],
    ["path", { d: "M9 7h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 11h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 6v10v-9" }, { r: "draw" }],
    ["path", { d: "M13 6v1" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M13 15v1" }, { r: "draw", d: 0.05 }],
  ],
});
