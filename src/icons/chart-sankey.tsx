import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-sankey" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartSankey = createIcon("ChartSankey", "chart-sankey", {
  nodes: [
    ["path", { d: "M4 6c6.944 0 9.056 8 16 8" }, { r: "draw" }],
    ["path", { d: "M4 12c6.37 0 9.63 6 16 6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M20 6c-7.526 0 -7.905 12 -16 12" }, { r: "draw", d: 0.2 }],
  ],
});
