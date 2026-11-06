import { icon } from "../icon.js";

// Adapted from Tabler Icons "maximize-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MaximizeOff = icon("MaximizeOff", "maximize-off", {
  nodes: [
    ["path", { d: "M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" }, { r: "slide", x: -0.7, y: -0.7, a: 1, o: [5, 6] }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "slide", x: -0.7, y: 0.7, a: 1, o: [6, 18] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 0.7, y: -0.7, a: 1, o: [18, 6] }],
    ["path", { d: "M16 20h2c.545 0 1.04 -.218 1.4 -.572" }, { r: "slide", x: 0.7, y: 0.7, a: 1, o: [18, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", fill: "none" }, { r: "slide", x: -0.7, y: -0.7, a: 1, o: [5, 6] }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", fill: "none" }, { r: "slide", x: 0.7, y: -0.7, a: 1, o: [18, 6] }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", fill: "none" }, { r: "slide", x: -0.7, y: 0.7, a: 1, o: [6, 18] }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", fill: "none" }, { r: "slide", x: 0.7, y: 0.7, a: 1, o: [18, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
