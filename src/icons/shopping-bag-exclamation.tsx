import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shopping-bag-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingBagExclamation = createIcon("ShoppingBagExclamation", "shopping-bag-exclamation", {
  nodes: [
    ["path", { d: "M15 21h-6.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.258 1.678" }],
    ["path", { d: "M9 11v-5a3 3 0 0 1 6 0v5" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
