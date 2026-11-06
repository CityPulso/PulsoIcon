import { icon } from "../icon.js";

// Adapted from Tabler Icons "chart-dots-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartDots2 = icon("ChartDots2", "chart-dots-2", {
  nodes: [
    ["path", { d: "M3 3v18h18" }, { r: "draw" }],
    ["path", { d: "M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [9.0, 15.0] }],
    ["path", { d: "M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [13.0, 5.0] }],
    ["path", { d: "M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [18.0, 12.0] }],
    ["path", { d: "M21 3l-6 1.5" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M14.113 6.65l2.771 3.695" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M16 12.5l-5 2" }, { r: "draw", d: 0.15 }],
  ],
});
