import { icon } from "../icon.js";

// Adapted from Tabler Icons "shopping-cart-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingCartExclamation = icon("ShoppingCartExclamation", "shopping-cart-exclamation", {
  nodes: [
    ["path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M15 17h-9v-14h-2" }],
    ["path", { d: "M6 5l14 1l-.854 5.976m-2.646 1.024h-10.5" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
