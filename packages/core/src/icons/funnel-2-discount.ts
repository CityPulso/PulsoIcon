import { icon } from "../icon.js";

// Adapted from Tabler Icons "filter-2-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Discount = icon("Funnel2Discount", "funnel-2-discount", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.25, o: [16, 16] }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw" }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.35, o: [21, 21] }],
  ],
});
