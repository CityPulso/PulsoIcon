import { icon } from "../icon.js";

// Adapted from Tabler Icons "chart-arrows" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartArrows = icon("ChartArrows", "chart-arrows", {
  nodes: [
    ["path", { d: "M3 18l14 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 9l3 3l-3 3" }, { r: "slide", d: 0.3, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M14 15l3 3l-3 3" }, { r: "slide", d: 0.4, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 3l0 18" }],
    ["path", { d: "M3 12l9 0" }, { r: "draw" }],
    ["path", { d: "M18 3l3 3l-3 3" }, { r: "slide", d: 0.5, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 6l18 0" }, { r: "draw", d: 0.2 }],
  ],
});
