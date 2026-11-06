import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-cell-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitCellPlus = icon("CircuitCellPlus", "circuit-cell-plus", {
  nodes: [
    ["path", { d: "M2 12h9" }],
    ["path", { d: "M15 12h7" }],
    ["path", { d: "M11 5v14" }, { r: "grow", o: [11, 12] }],
    ["path", { d: "M15 9v6" }, { r: "grow", d: 0.1, o: [15, 12] }],
    ["path", { d: "M3 5h4" }, { r: "pop", d: 0.2, o: [5, 5] }],
    ["path", { d: "M5 3v4" }, { r: "pop", d: 0.2, o: [5, 5] }],
  ],
});
