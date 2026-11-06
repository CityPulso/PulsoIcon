import { icon } from "../icon.js";

// Adapted from Tabler Icons "bounce-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BounceRight = icon("BounceRight", "bounce-right", {
  nodes: [
    ["path", { d: "M4 15.5c3 -1 5.5 -.5 8 4.5c.5 -3 1.5 -5.5 3 -8" }, { r: "draw" }],
    ["path", { d: "M18 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" }, { r: "bounce", d: 0.2, x: 0, y: -1, a: 2, o: [18, 7] }],
  ],
});
