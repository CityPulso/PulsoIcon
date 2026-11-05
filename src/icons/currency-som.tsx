import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-som" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencySom = createIcon("CurrencySom", "currency-som", {
  text: true,
  nodes: [
    ["path", { d: "M10 18v-12h-5v10a2 2 0 0 1 -2 2" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4" }, { r: "draw", d: 0.1 }],
  ],
});
