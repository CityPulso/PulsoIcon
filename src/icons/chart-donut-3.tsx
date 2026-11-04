import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-donut-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartDonut3 = createIcon("ChartDonut3", "chart-donut-3", {
  nodes: [
    ["path", { d: "M12 3v5m4 4h5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M8.929 14.582l-3.429 2.918" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "draw" }],
  ],
});
