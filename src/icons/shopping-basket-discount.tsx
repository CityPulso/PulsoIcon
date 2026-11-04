import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "basket-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingBasketDiscount = createIcon("ShoppingBasketDiscount", "shopping-basket-discount", {
  nodes: [
    ["path", { d: "M17 10l-2 -6" }],
    ["path", { d: "M7 10l2 -6" }],
    ["path", { d: "M12.5 20h-5.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.394 2.248" }],
    ["path", { d: "M13.856 13.254a2 2 0 1 0 -1.856 2.746" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw" }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.3, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.2, o: [16, 16] }],
  ],
});
