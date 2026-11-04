import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-ammeter" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitAmmeter = createIcon("CircuitAmmeter", "circuit-ammeter", {
  nodes: [
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M5 12h-3" }],
    ["path", { d: "M19 12h3" }],
    ["path", { d: "M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 12h-4" }, { r: "draw", d: 0.3 }],
  ],
});
