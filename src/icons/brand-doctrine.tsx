import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-doctrine" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandDoctrine = createIcon("BrandDoctrine", "brand-doctrine", {
  nodes: [
    ["path", { d: "M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }],
    ["path", { d: "M9 14h6" }, { r: "growX", d: 0.15, o: [9, 14] }],
    ["path", { d: "M12 11l3 3l-3 3" }, { r: "slide", d: 0.15, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M10 3l6.9 6" }, { r: "draw" }],
  ],
});
