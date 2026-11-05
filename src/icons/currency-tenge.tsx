import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-tenge" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyTenge = createIcon("CurrencyTenge", "currency-tenge", {
  text: true,
  nodes: [
    ["path", { d: "M6 5h12" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M6 9h12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 9v10" }, { r: "draw", d: 0.2 }],
  ],
});
