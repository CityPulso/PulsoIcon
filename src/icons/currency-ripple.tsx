import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-ripple" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyRipple = createIcon("CurrencyRipple", "currency-ripple", {
  nodes: [
    ["path", { d: "M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M10 12h3l2 -2.5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M15 14.5l-2 -2.5" }, { r: "draw", d: 0.4 }],
  ],
});
