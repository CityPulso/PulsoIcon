import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "receipt-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReceiptOff = createIcon("ReceiptOff", "receipt-off", {
  nodes: [
    ["path", { d: "M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }, { r: "sway", a: 2, o: [12, 12] }],
    ["path", { d: "M11 7l4 0" }, { r: "growX", d: 0.1, o: [11, 7] }],
    ["path", { d: "M9 11l2 0" }, { r: "growX", d: 0.2, o: [9, 11] }],
    ["path", { d: "M13 15l2 0" }, { r: "growX", d: 0.3, o: [13, 15] }],
    ["path", { d: "M15 11l0 .01" }, { r: "pop", d: 0.35, o: [15, 11] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
