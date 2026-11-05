import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-zcash" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyZcash = createIcon("CurrencyZcash", "currency-zcash", {
  text: true,
  nodes: [
    ["path", { d: "M7 6h10l-10 12h10" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M12 4v2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 18v2" }, { r: "draw", d: 0.2 }],
  ],
});
