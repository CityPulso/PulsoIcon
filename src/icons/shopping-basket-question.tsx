import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "basket-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingBasketQuestion = createIcon("ShoppingBasketQuestion", "shopping-basket-question", {
  nodes: [
    ["path", { d: "M17 10l-2 -6" }],
    ["path", { d: "M7 10l2 -6" }],
    ["path", { d: "M15 20h-7.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.161 .918" }],
    ["path", { d: "M12 16a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.05 }],
  ],
});
