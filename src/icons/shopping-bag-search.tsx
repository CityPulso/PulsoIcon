import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shopping-bag-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingBagSearch = createIcon("ShoppingBagSearch", "shopping-bag-search", {
  nodes: [
    ["path", { d: "M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.117 .761" }],
    ["path", { d: "M9 11v-5a3 3 0 0 1 6 0v5" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", o: [18, 18] }],
  ],
});
