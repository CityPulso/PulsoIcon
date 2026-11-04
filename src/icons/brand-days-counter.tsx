import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-days-counter" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandDaysCounter = createIcon("BrandDaysCounter", "brand-days-counter", {
  nodes: [
    ["path", { d: "M20.779 10.007a9 9 0 1 0 -10.77 10.772" }],
    ["path", { d: "M13 21h8v-7" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 8v4l3 3" }, { r: "spin", o: [12, 12] }],
  ],
});
