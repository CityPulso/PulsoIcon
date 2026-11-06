import { icon } from "../icon.js";

// Adapted from Tabler Icons "shopping-cart-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingCartDiscount = icon("ShoppingCartDiscount", "shopping-cart-discount", {
  nodes: [
    ["path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M12.5 17h-6.5v-14h-2" }],
    ["path", { d: "M6 5l14 1l-.859 6.011m-6.141 .989h-7" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw" }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.3, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.2, o: [16, 16] }],
  ],
});
