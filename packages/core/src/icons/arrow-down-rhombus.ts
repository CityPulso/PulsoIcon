import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-down-rhombus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowDownRhombus = icon("ArrowDownRhombus", "arrow-down-rhombus", {
  nodes: [
    ["path", { d: "M12 8v13" }, { r: "bounce", d: 0.1, y: 1, a: 1.5, o: [12, 14] }],
    ["path", { d: "M15 18l-3 3l-3 -3" }, { r: "bounce", d: 0.1, y: 1, a: 1.5, o: [12, 19.5] }],
    ["path", { d: "M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5l2.5 -2.5" }, { r: "spin", a: 90, o: [12, 5.5] }],
  ],
});
