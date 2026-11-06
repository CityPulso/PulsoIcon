import { icon } from "../icon.js";

// Adapted from Tabler Icons "coin-yen" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "coin-yen" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CoinYen = icon("CoinYen", "coin-yen", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 12h6" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 15h6" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 8l3 4.5" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M15 8l-3 4.5v4.5" }, { r: "flip", o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.445 3.828a1 1 0 0 0 -1.387 .277l-2.168 3.251l-2.168 -3.25a1 1 0 0 0 -1.286 -.337l-.1 .059a1 1 0 0 0 -.278 1.387l1.63 2.445h-.798a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1a1 1 0 0 0 .883 .993l.117 .007l.117 -.007a1 1 0 0 0 .883 -.993v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-.799l1.631 -2.445a1 1 0 0 0 -.184 -1.317l-.093 -.07z",
        stroke: "none",
      },
      { r: "flip", o: [12, 12] },
    ],
  ],
});
