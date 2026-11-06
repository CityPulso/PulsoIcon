import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-bar-both" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBarBoth = icon("ArrowBarBoth", "arrow-bar-both", {
  nodes: [
    ["path", { d: "M8 12h-6" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [5, 12] }],
    ["path", { d: "M5 15l-3 -3l3 -3" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [3.5, 12] }],
    ["path", { d: "M22 12h-6" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [19, 12] }],
    ["path", { d: "M19 15l3 -3l-3 -3" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [20.5, 12] }],
    ["path", { d: "M12 4v16" }, { r: "press", a: 0.1, o: [12, 12] }],
  ],
});
