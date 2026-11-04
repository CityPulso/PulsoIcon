import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-double-nw-se" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsDoubleNwSe = createIcon("ArrowsDoubleNwSe", "arrows-double-nw-se", {
  nodes: [
    ["path", { d: "M14 21l-11 -11" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [8.5, 15.5] }],
    ["path", { d: "M3 14v-4h4" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [5, 12] }],
    ["path", { d: "M17 14h4v-4" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1.5, o: [19, 12] }],
    ["path", { d: "M10 3l11 11" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1.5, o: [15.5, 8.5] }],
  ],
});
