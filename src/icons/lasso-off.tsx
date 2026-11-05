import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lasso-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LassoOff = createIcon("LassoOff", "lasso-off", {
  nodes: [
    [
      "path",
      {
        d: "M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -1.804 .878 -3.449 2.319 -4.69m2.49 -1.506a11.066 11.066 0 0 1 4.191 -.804c4.97 0 9 3.134 9 7c0 1.799 -.873 3.44 -2.307 4.68m-2.503 1.517a11.066 11.066 0 0 1 -4.19 .803c-1.913 0 -3.686 -.464 -5.144 -1.255",
      },
      { r: "swing", a: 8, o: [5, 15] },
    ],
    ["path", { d: "M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "swing", a: 8, o: [5, 15] }],
    ["path", { d: "M5 17c0 1.42 .316 2.805 1 4" }, { r: "swing", a: 8, o: [5, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3.704 14.467a10 8 0 1 1 3.115 2.375", fill: "none" }, { r: "swing", a: 8, o: [5, 15] }],
    ["path", { d: "M7 22a5 5 0 0 1-2-3.994", fill: "none" }, { r: "swing", a: 8, o: [5, 15] }],
    ["circle", { cx: "5", cy: "16", r: "2" }, { r: "swing", a: 8, o: [5, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
