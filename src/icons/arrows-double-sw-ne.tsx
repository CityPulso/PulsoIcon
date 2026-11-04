import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-double-sw-ne" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsDoubleSwNe = createIcon("ArrowsDoubleSwNe", "arrows-double-sw-ne", {
  nodes: [
    ["path", { d: "M14 3l-11 11" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [8.5, 8.5] }],
    ["path", { d: "M3 10v4h4" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [5, 12] }],
    ["path", { d: "M17 10h4v4" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19, 12] }],
    ["path", { d: "M10 21l11 -11" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [15.5, 15.5] }],
  ],
});
