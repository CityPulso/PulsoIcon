import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rocket-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RocketOff = createIcon("RocketOff", "rocket-off", {
  nodes: [
    [
      "path",
      {
        d: "M9.29 9.275a9.03 9.03 0 0 0 -.29 .725a6 6 0 0 0 -5 3a8 8 0 0 1 7 7a6 6 0 0 0 3 -5c.241 -.085 .478 -.18 .708 -.283m2.428 -1.61a9 9 0 0 0 2.864 -6.107a3 3 0 0 0 -3 -3a9 9 0 0 0 -6.107 2.864",
      },
      { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" }, { r: "flicker", o: [6, 17] }],
    ["path", { d: "M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }, { r: "flicker", o: [6, 17] }],
    ["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" }, { r: "flicker", o: [6, 17] }],
    ["path", { d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }, { r: "flicker", o: [6, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
