import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transaction-bitcoin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransactionBitcoin = createIcon("TransactionBitcoin", "transaction-bitcoin", {
  nodes: [
    ["path", { d: "M15 12h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" }, { r: "pop", d: 0.4, o: [18, 16] }],
    ["path", { d: "M16 16h4" }, { r: "pop", d: 0.4, o: [18, 16] }],
    ["path", { d: "M16 11v10v-9" }, { r: "pop", d: 0.4, o: [18, 16] }],
    ["path", { d: "M19 11v1" }, { r: "pop", d: 0.4, o: [18, 16] }],
    ["path", { d: "M19 20v1" }, { r: "pop", d: 0.4, o: [18, 16] }],
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M7 5h8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M7 5v8a3 3 0 0 0 3 3h1" }, { r: "draw", d: 0.2 }],
  ],
});
