import { icon } from "../icon.js";

export const ShoppingBasket = icon("ShoppingBasket", "shopping-basket", {
  nodes: [
    ["path", { d: "m15 11-1 9" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "m19 11-4-7" }, { r: "swing", d: 0.05, a: 10, o: [15, 11] }],
    ["path", { d: "M2 11h20" }, { r: "growX", d: 0.1, o: [12, 11] }],
    ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M4.5 15.5h15" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "m5 11 4-7" }, { r: "swing", d: 0.05, a: -10, o: [9, 11] }],
    ["path", { d: "m9 11 1 9" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
