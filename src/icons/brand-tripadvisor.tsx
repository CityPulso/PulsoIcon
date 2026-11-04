import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-tripadvisor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandTripadvisor = createIcon("BrandTripadvisor", "brand-tripadvisor", {
  nodes: [
    ["path", { d: "M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" }, { r: "blink", o: [6.5, 13.5] }],
    ["path", { d: "M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" }, { r: "blink", o: [17.5, 13.5] }],
    ["path", { d: "M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5" }],
    ["path", { d: "M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5" }],
    ["path", { d: "M10.5 15.5l1.5 2l1.5 -2" }, { r: "bounce", d: 0.2, y: 1, a: 1 }],
    ["path", { d: "M9 6.75c2 -.667 4 -.667 6 0" }],
  ],
});
