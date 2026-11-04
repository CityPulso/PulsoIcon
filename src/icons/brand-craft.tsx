import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-craft" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandCraft = createIcon("BrandCraft", "brand-craft", {
  nodes: [
    ["path", { d: "M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0 -8 -8a8 8 0 0 0 8 -8" }, { r: "draw" }],
    ["path", { d: "M4 12h8" }, { r: "growX", d: 0.2, o: [4, 12] }],
    ["path", { d: "M12 4v16" }, { r: "grow", d: 0.2, o: [12, 4] }],
  ],
});
