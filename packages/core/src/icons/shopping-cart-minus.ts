import { icon } from "../icon.js";

export const ShoppingCartMinus = icon("ShoppingCartMinus", "shopping-cart-minus", {
  nodes: [
    ["path", { d: "M16 5h6" }, { r: "growX", d: 0.15, o: [19, 5] }],
    ["path", { d: "m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" }, { r: "slide", x: 1, a: 1.5, o: [11.759, 10.011] }],
    ["path", { d: "M4.564 5H12" }, { r: "fade", o: [8.282, 5] }],
    ["path", { d: "M6.25 14h12.712a2 2 0 001.991-1.57l.514-3.113" }, { r: "slide", x: 1, a: 1.5, o: [11.759, 10.011] }],
    ["circle", { cx: "18", cy: "20", r: "2" }, { r: "spin", a: 360, o: [18, 20] }],
    ["circle", { cx: "8", cy: "20", r: "2" }, { r: "spin", a: 360, o: [8, 20] }],
  ],
});
