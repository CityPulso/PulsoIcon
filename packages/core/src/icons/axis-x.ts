import { icon } from "../icon.js";

// Adapted from Tabler Icons "axis-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AxisX = icon("AxisX", "axis-x", {
  nodes: [
    ["path", { d: "M4 13v.01" }, { r: "pop", d: 0.3, o: [4, 13] }],
    ["path", { d: "M4 9v.01" }, { r: "pop", d: 0.4, o: [4, 9] }],
    ["path", { d: "M4 5v.01" }, { r: "pop", d: 0.5, o: [4, 5] }],
    ["path", { d: "M17 20l3 -3l-3 -3" }, { r: "slide", d: 0.2, x: 1, y: 0, a: 2 }],
    ["path", { d: "M4 17h16" }, { r: "draw" }],
  ],
});
