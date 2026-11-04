import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-picsart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandPicsart = createIcon("BrandPicsart", "brand-picsart", {
  nodes: [
    ["path", { d: "M5 9a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }],
    ["path", { d: "M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.2, o: [12, 9] }],
    ["path", { d: "M5 9v11a2 2 0 1 0 4 0v-4.5" }, { r: "draw" }],
  ],
});
