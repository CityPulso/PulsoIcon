import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-cell" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitCell = icon("CircuitCell", "circuit-cell", {
  nodes: [
    ["path", { d: "M2 12h8" }],
    ["path", { d: "M14 12h8" }],
    ["path", { d: "M10 5v14" }, { r: "grow", o: [10, 12] }],
    ["path", { d: "M14 9v6" }, { r: "grow", d: 0.1, o: [14, 12] }],
  ],
});
