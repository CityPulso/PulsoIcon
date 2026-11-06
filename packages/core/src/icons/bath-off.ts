import { icon } from "../icon.js";

// Adapted from Tabler Icons "bath-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BathOff = icon("BathOff", "bath-off", {
  nodes: [
    [
      "path",
      { d: "M16 12h4a1 1 0 0 1 1 1v3c0 .311 -.036 .614 -.103 .904m-1.61 2.378a3.982 3.982 0 0 1 -2.287 .718h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1h8" },
      { r: "wobble", a: 3, o: [12, 17] },
    ],
    ["path", { d: "M6 12v-6m1.178 -2.824c.252 -.113 .53 -.176 .822 -.176h3v2.25" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M4 21l1 -1.5" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M20 21l-1 -1.5" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 4 8 6", fill: "none" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M17 19v2", fill: "none" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M2 12h20", fill: "none" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M7 19v2", fill: "none" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5", fill: "none" }, { r: "wobble", a: 3, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
