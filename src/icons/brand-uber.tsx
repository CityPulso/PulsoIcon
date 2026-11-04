import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-uber" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandUber = createIcon("BrandUber", "brand-uber", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 10a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" }, { r: "press", o: [12, 12] }],
    ["path", { d: "M3 12h6" }, { r: "draw", d: 0.1 }],
  ],
});
