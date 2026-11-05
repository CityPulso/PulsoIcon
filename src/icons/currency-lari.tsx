import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-lari" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyLari = createIcon("CurrencyLari", "currency-lari", {
  text: true,
  nodes: [
    ["path", { d: "M18 13a6 6 0 1 0 -6 6" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M6 19h12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 5v7" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 12v-7" }, { r: "draw", d: 0.3 }],
  ],
});
