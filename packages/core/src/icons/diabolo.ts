import { icon } from "../icon.js";

// Adapted from Tabler Icons "diabolo" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Diabolo = icon("Diabolo", "diabolo", {
  nodes: [
    ["path", { d: "M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" }, { r: "spin", d: 0, a: 360, o: [12, 6] }],
    [
      "path",
      {
        d: "M4 6v.143a1 1 0 0 0 .048 .307l1.952 5.55l-1.964 5.67a1 1 0 0 0 -.036 .265v.065c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-.065a1 1 0 0 0 -.036 -.265l-1.964 -5.67l1.952 -5.55a1 1 0 0 0 .048 -.307v-.143",
      },
      { r: "wobble", d: 0, o: [12, 12] },
    ],
    ["path", { d: "M6 12c0 1.105 2.686 2 6 2s6 -.895 6 -2" }, { r: "wobble", d: 0, o: [12, 12] }],
  ],
});
