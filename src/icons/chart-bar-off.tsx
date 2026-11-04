import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-bar-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartBarOff = createIcon("ChartBarOff", "chart-bar-off", {
  nodes: [
    ["path", { d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" }, { r: "grow", o: [6, 20] }],
    ["path", { d: "M12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-10" }, { r: "grow", d: 0.08, o: [12, 20] }],
    ["path", { d: "M15 11v-6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1 -1 -1v-4" }, { r: "grow", d: 0.16, o: [18, 20] }],
    ["path", { d: "M4 20h14" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
