import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-wix" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandWix = createIcon("BrandWix", "brand-wix", {
  nodes: [
    ["path", { d: "M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" }, { r: "draw" }],
    ["path", { d: "M13 11.5v3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 9l5 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 9l-5 6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M13 9h.01" }, { r: "pop", d: 0.1, o: [13, 9] }],
  ],
});
