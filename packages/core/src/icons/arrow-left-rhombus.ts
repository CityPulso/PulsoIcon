import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-left-rhombus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowLeftRhombus = icon("ArrowLeftRhombus", "arrow-left-rhombus", {
  nodes: [
    ["path", { d: "M16 12h-13" }, { r: "bounce", d: 0.1, x: -1, a: 1.5, o: [10, 12] }],
    ["path", { d: "M6 9l-3 3l3 3" }, { r: "bounce", d: 0.1, x: -1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5" }, { r: "spin", a: 90, o: [18.5, 12] }],
  ],
});
