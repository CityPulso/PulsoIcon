import { icon } from "../icon.js";

// Adapted from Tabler Icons "ball-bowling" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "ball-bowling" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BallBowling = icon("BallBowling", "ball-bowling", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M11 9l0 .01" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M15 8l0 .01" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M14 12l0 .01" }, { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M17 3.34a10 10 0 1 1 -10 17.32a10 10 0 0 1 10 -17.32m-3 7.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-3 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m4 -1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1",
        stroke: "none",
      },
      { r: "roll", d: 0, x: 1, a: 2, o: [12, 12] },
    ],
  ],
});
