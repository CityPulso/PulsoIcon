import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-nano" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyNano = createIcon("CurrencyNano", "currency-nano", {
  nodes: [
    ["path", { d: "M7 20l10 -16" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M7 12h10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 16h10" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M17 20l-10 -16" }, { r: "draw", d: 0.3 }],
  ],
});
