import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "moon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "moon" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MoonOff = createIcon("MoonOff", "moon-off", {
  nodes: [
    [
      "path",
      {
        d: "M7.962 3.949a8.97 8.97 0 0 1 4.038 -.957v.008h.393a7.478 7.478 0 0 0 -2.07 3.308m-.141 3.84c.186 .823 .514 1.626 .989 2.373a7.49 7.49 0 0 0 4.586 3.268m3.893 -.11c.223 -.067 .444 -.144 .663 -.233a9.088 9.088 0 0 1 -.274 .597m-1.695 2.337a9 9 0 0 1 -12.71 -12.749",
      },
      { r: "tilt", d: 0, a: 10, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z",
        stroke: "none",
      },
      { r: "tilt", d: 0, a: 10, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
