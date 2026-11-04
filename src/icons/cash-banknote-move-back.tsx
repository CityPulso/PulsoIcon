import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cash-banknote-move-back" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CashBanknoteMoveBack = createIcon("CashBanknoteMoveBack", "cash-banknote-move-back", {
  nodes: [
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M12 18h-7a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5" }],
    ["path", { d: "M18 12h.01" }],
    ["path", { d: "M6 12h.01" }],
    ["path", { d: "M16 19h6" }, { r: "slide", x: -1, a: 2 }],
    ["path", { d: "M19 16l-3 3l3 3" }, { r: "slide", x: -1, a: 2 }],
  ],
});
