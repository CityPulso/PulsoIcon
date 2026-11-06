import { icon } from "../icon.js";

// Adapted from Tabler Icons "brand-bilibili" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandBilibili = icon("BrandBilibili", "brand-bilibili", {
  nodes: [
    ["path", { d: "M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6" }],
    ["path", { d: "M8 3l2 3" }, { r: "swing", a: -15, o: [10, 6] }],
    ["path", { d: "M16 3l-2 3" }, { r: "swing", a: 15, o: [14, 6] }],
    ["path", { d: "M9 13v-2" }, { r: "blink", d: 0.2, o: [9, 12] }],
    ["path", { d: "M15 11v2" }, { r: "blink", d: 0.2, o: [15, 12] }],
  ],
});
