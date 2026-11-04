import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "road-sign" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RoadSign = createIcon("RoadSign", "road-sign", {
  nodes: [
    [
      "path",
      {
        d: "M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0",
      },
    ],
    ["path", { d: "M9 14v-2c0 -.59 .414 -1 1 -1h5" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M13 9l2 2l-2 2" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
  ],
});
