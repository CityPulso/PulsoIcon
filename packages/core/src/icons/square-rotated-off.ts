import { icon } from "../icon.js";

// Adapted from Tabler Icons "square-rotated-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRotatedOff = icon("SquareRotatedOff", "square-rotated-off", {
  nodes: [
    [
      "path",
      {
        d: "M16.964 16.952l-3.462 3.461c-.782 .783 -2.222 .783 -3 0l-6.911 -6.91c-.783 -.783 -.783 -2.223 0 -3l3.455 -3.456m2 -2l1.453 -1.452c.782 -.783 2.222 -.783 3 0l6.911 6.91c.783 .783 .783 2.223 0 3l-1.448 1.45",
      },
      { r: "turn", a: 45, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" },
      { r: "turn", a: 45, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
