import { icon } from "../icon.js";

// Adapted from Tabler Icons "hemisphere-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HemisphereOff = icon("HemisphereOff", "hemisphere-off", {
  nodes: [
    [
      "path",
      {
        d: "M6.588 6.603c-2.178 .547 -3.588 1.417 -3.588 2.397c0 1.657 4.03 3 9 3m3.72 -.267c3.114 -.473 5.28 -1.518 5.28 -2.733c0 -1.657 -4.03 -3 -9 -3c-.662 0 -1.308 .024 -1.93 .07",
      },
      { r: "wobble", o: [12, 12] },
    ],
    ["path", { d: "M3 9a9 9 0 0 0 13.677 7.69m2.165 -1.843a8.965 8.965 0 0 0 2.158 -5.847" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M3 9a9 9 0 0 0 18 0" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
