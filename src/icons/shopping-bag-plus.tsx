import { createIcon } from "../runtime/createIcon.js";

export const ShoppingBagPlus = createIcon("ShoppingBagPlus", "shopping-bag-plus", {
  nodes: [
    ["path", { d: "M16 10a4 4 0 0 1-8 0" }, { r: "redraw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M3.103 6.034h17.794" }, { r: "swing", a: 8, o: [12, 2] }],
    ["path", { d: "M13 22H5a2 2 0 0 1-2-2V6.667a2 2 0 0 1 .4-1.2l2-2.667A2 2 0 0 1 7 2h10a2 2 0 0 1 1.6.8l2 2.667a2 2 0 0 1 .4 1.2V13" }, { r: "swing", a: 8, o: [12, 2] }],
    ["path", { d: "M16 18h6" }, { r: "spin", d: 0.15, a: 90, o: [19, 18] }],
    ["path", { d: "M19 15v6" }, { r: "spin", d: 0.15, a: 90, o: [19, 18] }],
  ],
});
