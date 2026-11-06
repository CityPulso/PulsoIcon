import { icon } from "../icon.js";

// Solid from Tabler Icons "credit-card" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreditCard = icon("CreditCard", "credit-card", {
  nodes: [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M6 14h2" }, { r: "flip", o: [12, 12] }],
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
  ],
});
