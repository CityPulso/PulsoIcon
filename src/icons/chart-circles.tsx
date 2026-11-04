import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-circles" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartCircles = createIcon("ChartCircles", "chart-circles", {
  nodes: [
    ["path", { d: "M4 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" }, { r: "slide", x: 0.7, y: 0.7, a: 1.2 }],
    ["path", { d: "M9 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" }, { r: "slide", x: -0.7, y: -0.7, a: 1.2 }],
  ],
});
