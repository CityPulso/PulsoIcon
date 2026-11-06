import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-diode" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitDiode = icon("CircuitDiode", "circuit-diode", {
  nodes: [
    ["path", { d: "M22 12h-6" }],
    ["path", { d: "M2 12h6" }],
    ["path", { d: "M8 7l8 5l-8 5l0 -10" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M16 7v10" }, { r: "flicker", d: 0.2 }],
  ],
});
