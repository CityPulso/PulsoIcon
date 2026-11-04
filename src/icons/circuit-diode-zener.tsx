import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-diode-zener" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitDiodeZener = createIcon("CircuitDiodeZener", "circuit-diode-zener", {
  nodes: [
    ["path", { d: "M22 12h-6" }],
    ["path", { d: "M2 12h6" }],
    ["path", { d: "M8 7l8 5l-8 5l0 -10" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M14 7h2v10h2" }, { r: "flicker", d: 0.2 }],
  ],
});
