import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-sugarizer" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandSugarizer = createIcon("BrandSugarizer", "brand-sugarizer", {
  nodes: [
    [
      "path",
      {
        d: "M14.277 16l3.252 -3.252a1.61 1.61 0 0 0 -2.277 -2.276l-3.252 3.251l-3.252 -3.251a1.61 1.61 0 0 0 -2.276 2.276l3.251 3.252l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277l3.252 -3.252l3.252 3.252a1.61 1.61 0 1 0 2.277 -2.277l-3.252 -3.252",
      },
      { r: "wobble", d: 0.1, o: [12, 16] },
    ],
    ["path", { d: "M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "bounce", y: -1, a: 1.5 }],
  ],
});
