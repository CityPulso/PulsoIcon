import { icon } from "../icon.js";

// Adapted from Tabler Icons "chart-treemap" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartTreemap = icon("ChartTreemap", "chart-treemap", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M12 4v16" }, { r: "draw" }],
    ["path", { d: "M4 15h8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 12h8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 12v8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 16h4" }, { r: "draw", d: 0.25 }],
  ],
});
