import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hexagonal-prism" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonalPrism = createIcon("HexagonalPrism", "hexagonal-prism", {
  nodes: [
    ["path", { d: "M20.792 6.996l-3.775 2.643a2.005 2.005 0 0 1 -1.147 .361h-7.74c-.41 0 -.81 -.126 -1.146 -.362l-3.774 -2.641" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 10v11" }, { r: "grow", d: 0.1, o: [8, 21] }],
    ["path", { d: "M16 10v11" }, { r: "grow", d: 0.15, o: [16, 21] }],
    [
      "path",
      {
        d: "M3.853 18.274l3.367 2.363a2 2 0 0 0 1.147 .363h7.265c.41 0 .811 -.126 1.147 -.363l3.367 -2.363c.536 -.375 .854 -.99 .854 -1.643v-9.262c0 -.655 -.318 -1.268 -.853 -1.643l-3.367 -2.363a2 2 0 0 0 -1.147 -.363h-7.266c-.41 0 -.811 .126 -1.147 .363l-3.367 2.363a2.006 2.006 0 0 0 -.853 1.644v9.261c0 .655 .318 1.269 .853 1.644",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
  ],
});
