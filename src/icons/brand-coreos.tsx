import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-coreos" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandCoreos = createIcon("BrandCoreos", "brand-coreos", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" }],
    ["path", { d: "M12 3c-3.263 3.212 -3 7.654 -3 12c4.59 .244 8.814 -.282 12 -3" }, { r: "draw" }],
    ["path", { d: "M9.5 9a4.494 4.494 0 0 1 5.5 5.5" }, { r: "draw", d: 0.2 }],
  ],
});
