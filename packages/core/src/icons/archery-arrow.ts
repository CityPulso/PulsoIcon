import { icon } from "../icon.js";

// Adapted from Tabler Icons "archery-arrow" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArcheryArrow = icon("ArcheryArrow", "archery-arrow", {
  nodes: [
    ["path", { d: "M14 7v3h3l3 -3h-3v-3l-3 3" }, { r: "shoot", x: -0.7, y: 0.7, a: 4 }],
    ["path", { d: "M14 10l-9 9" }, { r: "shoot", x: -0.7, y: 0.7, a: 4 }],
    ["path", { d: "M5 15v4h4" }, { r: "shoot", x: -0.7, y: 0.7, a: 4 }],
  ],
});
