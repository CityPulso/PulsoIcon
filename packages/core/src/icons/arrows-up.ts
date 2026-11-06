import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsUp = icon("ArrowsUp", "arrows-up", {
  nodes: [
    ["path", { d: "M17 3l0 18" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 12] }],
    ["path", { d: "M4 6l3 -3l3 3" }, { r: "slide", y: -1, a: 1.5, o: [7, 4.5] }],
    ["path", { d: "M20 6l-3 -3l-3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 4.5] }],
    ["path", { d: "M7 3l0 18" }, { r: "slide", y: -1, a: 1.5, o: [7, 12] }],
  ],
});
