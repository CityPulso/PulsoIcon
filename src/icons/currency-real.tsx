import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-real" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyReal = createIcon("CurrencyReal", "currency-real", {
  nodes: [
    ["path", { d: "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M4 18v-12h3a3 3 0 1 1 0 6h-3c5.5 0 5 4 6 6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18 6v-2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M17 20v-2" }, { r: "draw", d: 0.3 }],
  ],
});
