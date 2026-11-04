import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "receipt-tax" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReceiptTax = createIcon("ReceiptTax", "receipt-tax", {
  nodes: [
    ["path", { d: "M9 14l6 -6" }, { r: "draw" }],
    ["path", { d: "M9.5 8.5h.01" }, { r: "pop", d: 0.2, o: [9.5, 8.5] }],
    ["path", { d: "M14.5 13.5h.01" }, { r: "pop", d: 0.3, o: [14.5, 13.5] }],
    ["path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }],
  ],
});
