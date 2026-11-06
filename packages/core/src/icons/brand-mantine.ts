import { icon } from "../icon.js";

// Adapted from Tabler Icons "brand-mantine" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandMantine = icon("BrandMantine", "brand-mantine", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4" }, { r: "draw" }],
    ["path", { d: "M14 9h-2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 15h-2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M10 12h.01" }, { r: "pop", d: 0.3, o: [10, 12] }],
  ],
});
