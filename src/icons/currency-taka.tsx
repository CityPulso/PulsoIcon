import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-taka" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyTaka = createIcon("CurrencyTaka", "currency-taka", {
  text: true,
  nodes: [
    ["path", { d: "M15.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 11h6" }, { r: "draw", d: 0.2 }],
  ],
});
