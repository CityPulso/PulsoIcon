import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bottle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BottleOff = createIcon("BottleOff", "bottle-off", {
  nodes: [
    ["path", { d: "M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2" }, { r: "lift", y: -1, a: 1.5, o: [12, 4] }],
    [
      "path",
      {
        d: "M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v.199m0 4v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2a8.09 8.09 0 0 1 1.35 -4.474m1.336 -2.63a7.822 7.822 0 0 0 .314 -2.196",
      },
    ],
    ["path", { d: "M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 .866 -.142" }, { r: "sway", a: 4, o: [12, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
