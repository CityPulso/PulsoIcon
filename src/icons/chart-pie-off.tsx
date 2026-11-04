import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-pie-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartPieOff = createIcon("ChartPieOff", "chart-pie-off", {
  nodes: [
    [
      "path",
      {
        d: "M5.63 5.643a9 9 0 0 0 12.742 12.715m1.674 -2.29a9.03 9.03 0 0 0 .754 -2.068a1 1 0 0 0 -1 -1h-2.8m-4 0a2 2 0 0 1 -2 -2m0 -4v-3a.9 .9 0 0 0 -1 -.8a9 9 0 0 0 -2.057 .749",
      },
    ],
    ["path", { d: "M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [17, 7] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
