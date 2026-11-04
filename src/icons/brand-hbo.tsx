import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-hbo" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandHbo = createIcon("BrandHbo", "brand-hbo", {
  nodes: [
    ["path", { d: "M2 16v-8" }, { r: "draw" }],
    ["path", { d: "M6 8v8" }, { r: "draw" }],
    ["path", { d: "M2 12h4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8" }, { r: "spin", d: 0.15, o: [19, 12] }],
    ["path", { d: "M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.3, o: [19, 12] }],
  ],
});
