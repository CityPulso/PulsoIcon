import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-capacitor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitCapacitor = icon("CircuitCapacitor", "circuit-capacitor", {
  nodes: [
    ["path", { d: "M22 12h-8" }],
    ["path", { d: "M2 12h8" }],
    ["path", { d: "M10 7v10" }, { r: "slide", x: -1, a: 1 }],
    ["path", { d: "M14 7v10" }, { r: "slide", x: 1, a: 1 }],
  ],
});
