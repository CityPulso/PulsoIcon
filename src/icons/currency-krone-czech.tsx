import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-krone-czech" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyKroneCzech = createIcon("CurrencyKroneCzech", "currency-krone-czech", {
  nodes: [
    ["path", { d: "M5 6v12" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M5 12c3.5 0 6 -3 6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5 12c3.5 0 6 3 6 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M19 6l-2 2l-2 -2" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M19 12h-2a3 3 0 0 0 0 6h2" }, { r: "draw", d: 0.4 }],
  ],
});
