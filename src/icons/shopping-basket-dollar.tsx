import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "basket-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingBasketDollar = createIcon("ShoppingBasketDollar", "shopping-basket-dollar", {
  nodes: [
    ["path", { d: "M17 10l-2 -6" }],
    ["path", { d: "M7 10l2 -6" }],
    ["path", { d: "M13 20h-5.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304" }],
    ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.1, o: [19, 18] }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "draw", d: 0.1, o: [19, 18] }],
  ],
});
