import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-husd" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyHusd = createIcon("CurrencyHusd", "currency-husd", {
  text: true,
  nodes: [
    ["path", { d: "M7 20v-5" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M17 9v-5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 20v-6a2 2 0 0 0 -2 -2h-6a2 2 0 0 1 -2 -2v-6" }, { r: "draw", d: 0.2 }],
  ],
});
