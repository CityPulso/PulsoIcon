import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-bumble" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandBumble = createIcon("BrandBumble", "brand-bumble", {
  nodes: [
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.2, o: [12, 12] }],
    ["path", { d: "M9 8h6" }, { r: "growX", d: 0.15, o: [12, 8] }],
    ["path", { d: "M10 16h4" }, { r: "growX", d: 0.25, o: [12, 16] }],
    [
      "path",
      {
        d: "M16.268 3h-8.536a1.46 1.46 0 0 0 -1.268 .748l-4.268 7.509a1.507 1.507 0 0 0 0 1.486l4.268 7.509c.26 .462 .744 .747 1.268 .748h8.536a1.46 1.46 0 0 0 1.268 -.748l4.268 -7.509a1.507 1.507 0 0 0 0 -1.486l-4.268 -7.509a1.46 1.46 0 0 0 -1.268 -.748",
      },
      { r: "spin", a: 60, o: [12, 12] },
    ],
  ],
});
