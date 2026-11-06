import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-up-rhombus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowUpRhombus = icon("ArrowUpRhombus", "arrow-up-rhombus", {
  nodes: [
    ["path", { d: "M12 16v-13" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M15 6l-3 -3l-3 3" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [12, 4.5] }],
    ["path", { d: "M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5l2.5 2.5" }, { r: "spin", a: 90, o: [12, 18.5] }],
  ],
});
