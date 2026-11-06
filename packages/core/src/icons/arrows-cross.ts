import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-cross" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsCross = icon("ArrowsCross", "arrows-cross", {
  nodes: [
    ["path", { d: "M16 4h4v4" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M15 9l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [17.5, 6.5] }],
    ["path", { d: "M4 20l5 -5" }, { r: "draw", d: 0.05, o: [6.5, 17.5] }],
    ["path", { d: "M16 20h4v-4" }, { r: "slide", d: 0.25, x: 1, y: 1, a: 1.5, o: [18, 18] }],
    ["path", { d: "M4 4l16 16" }, { r: "draw", o: [12, 12] }],
  ],
});
