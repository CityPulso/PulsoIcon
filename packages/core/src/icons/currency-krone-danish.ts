import { icon } from "../icon.js";

// Adapted from Tabler Icons "currency-krone-danish" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyKroneDanish = icon("CurrencyKroneDanish", "currency-krone-danish", {
  text: true,
  nodes: [
    ["path", { d: "M5 6v12" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M5 12c3.5 0 6 -3 6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5 12c3.5 0 6 3 6 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 10v8" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M19 10a4 4 0 0 0 -4 4" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M20 18.01v-.01" }, { r: "pop", d: 0.3, o: [20.0, 18.01] }],
  ],
});
