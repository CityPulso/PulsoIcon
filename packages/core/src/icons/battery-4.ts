import { icon } from "../icon.js";

// Adapted from Tabler Icons "battery-4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Battery4 = icon("Battery4", "battery-4", {
  nodes: [
    [
      "path",
      { d: "M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" },
      { r: "pulse", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M7 10l0 4" }, { r: "grow", d: 0.0, o: [7, 14] }],
    ["path", { d: "M10 10l0 4" }, { r: "grow", d: 0.06, o: [10, 14] }],
    ["path", { d: "M13 10l0 4" }, { r: "grow", d: 0.12, o: [13, 14] }],
    ["path", { d: "M16 10l0 4" }, { r: "grow", d: 0.18, o: [16, 14] }],
  ],
});
