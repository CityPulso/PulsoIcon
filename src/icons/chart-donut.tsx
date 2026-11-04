import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-donut" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartDonut = createIcon("ChartDonut", "chart-donut", {
  nodes: [
    ["path", { d: "M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a.9 .9 0 0 0 -1 -.8" }, { r: "turn", a: -20, o: [12, 12] }],
    ["path", { d: "M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5 }],
  ],
});
