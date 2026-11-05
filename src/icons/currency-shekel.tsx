import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-shekel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyShekel = createIcon("CurrencyShekel", "currency-shekel", {
  text: true,
  nodes: [
    ["path", { d: "M6 18v-12h4a4 4 0 0 1 4 4v4" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M18 6v12h-4a4 4 0 0 1 -4 -4v-4" }, { r: "draw", d: 0.1 }],
  ],
});
