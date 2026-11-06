import { icon } from "../icon.js";

// Adapted from Tabler Icons "pill-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "pill" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PillOff = icon("PillOff", "pill-off", {
  nodes: [
    ["path", { d: "M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M8.5 8.5l7 7" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1 -8.414 -8.414l8 -8a5.95 5.95 0 0 1 8.414 0m-7 1.414l-4.294 4.293l5.586 5.586l4.294 -4.292a3.95 3.95 0 1 0 -5.586 -5.586",
        stroke: "none",
      },
      { r: "turn", a: 30, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
