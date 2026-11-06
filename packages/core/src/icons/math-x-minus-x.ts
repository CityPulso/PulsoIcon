import { icon } from "../icon.js";

// Adapted from Tabler Icons "math-x-minus-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathXMinusX = icon("MathXMinusX", "math-x-minus-x", {
  nodes: [
    ["path", { d: "M2 9l6 6" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M2 15l6 -6" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M16 9l6 6" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M16 15l6 -6" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M10 12h4" }, { r: "growX", d: 0.15, o: [12, 12] }],
  ],
});
