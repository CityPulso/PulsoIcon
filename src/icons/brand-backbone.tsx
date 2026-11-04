import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-backbone" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandBackbone = createIcon("BrandBackbone", "brand-backbone", {
  nodes: [
    ["path", { d: "M5 20l14 -8l-14 -8l0 16" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M19 20l-14 -8l14 -8l0 16" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
  ],
});
