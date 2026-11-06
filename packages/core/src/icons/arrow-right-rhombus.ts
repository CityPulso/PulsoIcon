import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-right-rhombus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRightRhombus = icon("ArrowRightRhombus", "arrow-right-rhombus", {
  nodes: [
    ["path", { d: "M8 12h13" }, { r: "bounce", d: 0.1, x: 1, a: 1.5, o: [14, 12] }],
    ["path", { d: "M18 9l3 3l-3 3" }, { r: "bounce", d: 0.1, x: 1, a: 1.5, o: [19.5, 12] }],
    ["path", { d: "M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5l-2.5 -2.5" }, { r: "spin", a: 90, o: [5.5, 12] }],
  ],
});
