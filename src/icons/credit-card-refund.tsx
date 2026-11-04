import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "credit-card-refund" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreditCardRefund = createIcon("CreditCardRefund", "credit-card-refund", {
  nodes: [
    ["path", { d: "M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M7 15h.01" }],
    ["path", { d: "M11 15h2" }],
    ["path", { d: "M16 19h6" }, { r: "slide", x: -1, a: 2 }],
    ["path", { d: "M19 16l-3 3l3 3" }, { r: "slide", x: -1, a: 2 }],
  ],
});
