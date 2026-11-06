import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-double-ne-sw" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsDoubleNeSw = icon("ArrowsDoubleNeSw", "arrows-double-ne-sw", {
  nodes: [
    ["path", { d: "M3 14l11 -11" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [8.5, 8.5] }],
    ["path", { d: "M10 3h4v4" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M10 17v4h4" }, { r: "slide", d: 0.1, x: -1, y: 1, a: 1.5, o: [12, 19] }],
    ["path", { d: "M21 10l-11 11" }, { r: "slide", d: 0.1, x: -1, y: 1, a: 1.5, o: [15.5, 15.5] }],
  ],
});
