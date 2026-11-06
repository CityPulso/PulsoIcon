import { icon } from "../icon.js";

// Adapted from Tabler Icons "writing-sign-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WritingSignOff = icon("WritingSignOff", "writing-sign-off", {
  nodes: [
    [
      "path",
      {
        d: "M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5",
      },
      { r: "draw", d: 0 },
    ],
    ["path", { d: "M16 16v1l2 2l.5 -.5m1.5 -2.5v-11c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v7" }, { r: "tilt", d: 0, a: 8, o: [18, 19] }],
    ["path", { d: "M16 7h4" }, { r: "tilt", d: 0, a: 8, o: [18, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5",
        fill: "none",
      },
      { r: "draw", d: 0 },
    ],
    ["path", { d: "M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2" }, { r: "tilt", d: 0, a: 8, o: [18, 19] }],
    ["path", { d: "M16 7h4" }, { r: "tilt", d: 0, a: 8, o: [18, 19] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
