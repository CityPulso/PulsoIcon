import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-kotlin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandKotlin = createIcon("BrandKotlin", "brand-kotlin", {
  nodes: [
    ["path", { d: "M20 20h-16v-16h16" }, { r: "draw" }],
    ["path", { d: "M4 20l16 -16" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M4 12l8 -8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 12l8 8" }, { r: "draw", d: 0.3 }],
  ],
});
