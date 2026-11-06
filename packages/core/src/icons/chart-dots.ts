import { icon } from "../icon.js";

// Adapted from Tabler Icons "chart-dots" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartDots = icon("ChartDots", "chart-dots", {
  nodes: [
    ["path", { d: "M3 3v18h18" }],
    ["path", { d: "M7 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [9, 9] }],
    ["path", { d: "M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [19, 7] }],
    ["path", { d: "M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [14, 15] }],
    ["path", { d: "M10.16 10.62l2.34 2.88" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15.088 13.328l2.837 -4.586" }, { r: "draw", d: 0.25 }],
  ],
});
