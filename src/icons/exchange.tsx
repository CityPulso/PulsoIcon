import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "exchange" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Exchange = createIcon("Exchange", "exchange", {
  nodes: [
    ["path", { d: "M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, a: 0.2, o: [5, 18] }],
    ["path", { d: "M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, a: 0.2, o: [19, 6] }],
    ["path", { d: "M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" }, { r: "slide", x: 1, a: 1.5 }],
  ],
});
