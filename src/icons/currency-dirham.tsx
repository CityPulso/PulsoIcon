import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-dirham" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyDirham = createIcon("CurrencyDirham", "currency-dirham", {
  nodes: [
    ["path", { d: "M8.5 19h-3.5" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 4v9" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M11 13.01v-.01" }, { r: "pop", d: 0.3, o: [11.0, 13.01] }],
  ],
});
