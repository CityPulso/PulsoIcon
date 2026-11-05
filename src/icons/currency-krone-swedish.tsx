import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-krone-swedish" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyKroneSwedish = createIcon("CurrencyKroneSwedish", "currency-krone-swedish", {
  text: true,
  nodes: [
    ["path", { d: "M5 6v12" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M5 12c3.5 0 6 -3 6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5 12c3.5 0 6 3 6 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 10v8" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M19 10a4 4 0 0 0 -4 4" }, { r: "draw", d: 0.4 }],
  ],
});
