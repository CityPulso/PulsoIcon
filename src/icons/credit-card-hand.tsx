import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "credit-card-hand" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreditCardHand = createIcon("CreditCardHand", "credit-card-hand", {
  nodes: [
    ["path", { d: "M2 4h9.914a3 3 0 0 1 1.92 .695l5.166 4.305" }],
    ["path", { d: "M11.15 9h8.85a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2 -2v-8.7" }, { r: "slide", x: 1, y: -0.5, a: 1.5 }],
    ["path", { d: "M3 8l7.2 4.7a1.803 1.803 0 0 0 2 -3l-4.2 -2.7" }],
    ["path", { d: "M5 16h17" }, { r: "slide", x: 1, y: -0.5, a: 1.5 }],
  ],
});
