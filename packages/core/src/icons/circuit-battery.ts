import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-battery" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitBattery = icon("CircuitBattery", "circuit-battery", {
  nodes: [
    ["path", { d: "M2 12h4" }],
    ["path", { d: "M18 12h4" }],
    ["path", { d: "M18 5v14" }, { r: "grow", d: 0.24, o: [18, 12] }],
    ["path", { d: "M14 9v6" }, { r: "grow", d: 0.16, o: [14, 12] }],
    ["path", { d: "M10 5v14" }, { r: "grow", d: 0.08, o: [10, 12] }],
    ["path", { d: "M6 9v6" }, { r: "grow", o: [6, 12] }],
  ],
});
