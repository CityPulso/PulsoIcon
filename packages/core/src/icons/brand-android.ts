import { icon } from "../icon.js";

// Adapted from Tabler Icons "brand-android" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandAndroid = icon("BrandAndroid", "brand-android", {
  nodes: [
    ["path", { d: "M4 10l0 6" }, { r: "tilt", d: 0.1, a: 20, o: [4, 10] }],
    ["path", { d: "M20 10l0 6" }, { r: "tilt", d: 0.1, a: -20, o: [20, 10] }],
    ["path", { d: "M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" }],
    ["path", { d: "M8 3l1 2" }, { r: "swing", a: 20, o: [9, 5] }],
    ["path", { d: "M16 3l-1 2" }, { r: "swing", a: -20, o: [15, 5] }],
    ["path", { d: "M9 18l0 3" }],
    ["path", { d: "M15 18l0 3" }],
  ],
});
