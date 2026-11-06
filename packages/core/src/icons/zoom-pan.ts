import { icon } from "../icon.js";

// Adapted from Tabler Icons "zoom-pan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ZoomPan = icon("ZoomPan", "zoom-pan", {
  nodes: [
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M17 17l-2.5 -2.5" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M10 4l2 -2l2 2" }, { r: "slide", x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M20 10l2 2l-2 2" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M4 10l-2 2l2 2" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M10 20l2 2l2 -2" }, { r: "slide", x: 0, y: 1, a: 1.5 }],
  ],
});
