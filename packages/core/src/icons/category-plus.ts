import { icon } from "../icon.js";

// Adapted from Tabler Icons "category-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CategoryPlus = icon("CategoryPlus", "category-plus", {
  nodes: [
    ["path", { d: "M4 4h6v6h-6v-6" }, { r: "press", d: 0, a: 0.08, o: [7, 7] }],
    ["path", { d: "M14 4h6v6h-6v-6" }, { r: "press", d: 0, a: 0.08, o: [17, 7] }],
    ["path", { d: "M4 14h6v6h-6v-6" }, { r: "press", d: 0, a: 0.08, o: [7, 17] }],
    ["path", { d: "M14 17h6m-3 -3v6" }, { r: "spin", d: 0.1, a: 180, o: [17, 17] }],
  ],
});
