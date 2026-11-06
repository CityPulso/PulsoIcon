import { icon } from "../icon.js";

// Adapted from Tabler Icons "carrot-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarrotOff = icon("CarrotOff", "carrot-off", {
  nodes: [
    [
      "path",
      { d: "M8.868 8.846c-2.756 3.382 -5.868 12.154 -5.868 12.154s8.75 -3.104 12.134 -5.85m1.667 -2.342a4.486 4.486 0 0 0 -5.589 -5.615" },
      { r: "wobble", a: 3, o: [10, 14] },
    ],
    ["path", { d: "M9 13l-1.5 -1.5" }],
    ["path", { d: "M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2" }, { r: "sway", a: 8, o: [19, 8] }],
    ["path", { d: "M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3" }, { r: "sway", a: 8, o: [16, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
