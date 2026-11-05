import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-tugrik" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyTugrik = createIcon("CurrencyTugrik", "currency-tugrik", {
  text: true,
  nodes: [
    ["path", { d: "M7 6h10" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M12 6v13" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 17l8 -3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 10l-8 3" }, { r: "draw", d: 0.3 }],
  ],
});
