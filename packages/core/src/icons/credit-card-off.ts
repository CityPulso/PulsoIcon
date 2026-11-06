import { icon } from "../icon.js";

// Adapted from Tabler Icons "credit-card-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "credit-card" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreditCardOff = icon("CreditCardOff", "credit-card-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.3, o: [12, 12] }],
    ["path", { d: "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 11l8 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M15 11l6 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M7 15l.01 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M11 15l2 0" }, { r: "flip", o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2m5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z",
        stroke: "none",
      },
      { r: "flip", o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.3, o: [12, 12] }, "line"],
  ],
});
