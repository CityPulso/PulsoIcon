import { icon } from "../icon.js";

// Adapted from Tabler Icons "chart-pie-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartPie3 = icon("ChartPie3", "chart-pie-3", {
  nodes: [
    ["path", { d: "M12 12l-6.5 5.5" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M12 3v9h9" }, { r: "slide", d: 0.3, x: 0.7, y: -0.7, a: 1.5, o: [16.5, 7.5] }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "draw" }],
  ],
});
