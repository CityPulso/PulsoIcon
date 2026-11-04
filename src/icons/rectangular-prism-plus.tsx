import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rectangular-prism-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RectangularPrismPlus = createIcon("RectangularPrismPlus", "rectangular-prism-plus", {
  nodes: [
    [
      "path",
      {
        d: "M21 12.5v-3.509a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-10 5.007c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l2.062 -1.032",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M9 21v-7.5" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M9 13.5l11.5 -5.5" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M3.5 11l5.5 2.5" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
