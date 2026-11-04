import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-django" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandDjango = createIcon("BrandDjango", "brand-django", {
  nodes: [
    ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" }],
    ["path", { d: "M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M16 7v.01" }, { r: "pop", d: 0.3, o: [16, 7] }],
    ["path", { d: "M16 10v5.586c0 .905 -.36 1.774 -1 2.414" }, { r: "draw", d: 0.2 }],
  ],
});
