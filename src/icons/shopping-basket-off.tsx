import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "basket-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingBasketOff = createIcon("ShoppingBasketOff", "shopping-basket-off", {
  nodes: [
    ["path", { d: "M17 10l-2 -6" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M7 10l.75 -2.252m1.001 -3.002l.249 -.746" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    [
      "path",
      {
        d: "M12 8h7a2 2 0 0 1 1.977 2.304c-.442 2.516 -.756 4.438 -.977 5.696m-1.01 3.003a2.997 2.997 0 0 1 -2.234 .997h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h2.999",
      },
      { r: "bounce", y: -1, a: 1, o: [12, 15] },
    ],
    ["path", { d: "M12 12a2 2 0 1 0 2 2" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "m15 11-1 9", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "m19 11-4-7", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M2 11h20", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M4.5 15.5h15", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "m5 11 4-7", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "m9 11 1 9", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
