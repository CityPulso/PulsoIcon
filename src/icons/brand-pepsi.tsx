import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-pepsi" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandPepsi = createIcon("BrandPepsi", "brand-pepsi", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M4 16c5.713 -2.973 11 -3.5 13.449 -11.162" }, { r: "turn", a: 25, o: [12, 12] }],
    ["path", { d: "M5 17.5c5.118 -2.859 15 0 14 -11" }, { r: "turn", a: 25, o: [12, 12] }],
  ],
});
