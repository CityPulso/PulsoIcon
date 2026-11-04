import { createIcon } from "../runtime/createIcon.js";

export const ShoppingBasketPlus = createIcon("ShoppingBasketPlus", "shopping-basket-plus", {
  nodes: [
    ["path", { d: "m19 11-4-7" }, { r: "swing", d: 0.05, a: 10, o: [15, 11] }],
    ["path", { d: "M2 11h20" }, { r: "growX", d: 0.1, o: [12, 11] }],
    ["path", { d: "M12.5 20H7.1a2 2 0 0 1-2-1.6L3.5 11" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "m20.5 11-.5 2" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M4.5 15.5H13" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "m5 11 4-7" }, { r: "swing", d: 0.05, a: -10, o: [9, 11] }],
    ["path", { d: "m9 11 1 9" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M16 18h6" }, { r: "spin", d: 0.15, a: 90, o: [19, 18] }],
    ["path", { d: "M19 15v6" }, { r: "spin", d: 0.15, a: 90, o: [19, 18] }],
  ],
});
