import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shopping-cart-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingCartOff = createIcon("ShoppingCartOff", "shopping-cart-off", {
  nodes: [
    ["path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "roll", x: 1, a: 1.5, o: [6, 19] }],
    ["path", { d: "M17 17a2 2 0 1 0 2 2" }, { r: "roll", x: 1, a: 1.5, o: [17, 19] }],
    ["path", { d: "M17 17h-11v-11" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18", fill: "none" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "18", cy: "20", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [17, 19] }],
    ["circle", { cx: "8", cy: "20", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [6, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
