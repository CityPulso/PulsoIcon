import { icon } from "../icon.js";

// Adapted from Tabler Icons "category-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CategoryMinus = icon("CategoryMinus", "category-minus", {
  nodes: [
    ["path", { d: "M4 4h6v6h-6v-6" }, { r: "press", d: 0, a: 0.08, o: [7, 7] }],
    ["path", { d: "M14 4h6v6h-6v-6" }, { r: "press", d: 0, a: 0.08, o: [17, 7] }],
    ["path", { d: "M4 14h6v6h-6v-6" }, { r: "press", d: 0, a: 0.08, o: [7, 17] }],
    ["path", { d: "M14 17h6" }, { r: "growX", d: 0.15, o: [17, 17] }],
  ],
});
