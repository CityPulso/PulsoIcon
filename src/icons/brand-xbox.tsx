import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-xbox" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandXbox = createIcon("BrandXbox", "brand-xbox", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" }, { r: "draw" }],
    ["path", { d: "M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" }, { r: "draw", d: 0.1 }],
  ],
});
