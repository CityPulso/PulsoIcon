import { icon } from "../icon.js";

// Adapted from Tabler Icons "grid-scan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GridScan = icon("GridScan", "grid-scan", {
  nodes: [
    ["path", { d: "M10 8v8" }, { r: "grow", o: [10, 12] }],
    ["path", { d: "M14 8v8" }, { r: "grow", d: 0.05, o: [14, 12] }],
    ["path", { d: "M8 10h8" }, { r: "growX", d: 0.15, o: [12, 10] }],
    ["path", { d: "M8 14h8" }, { r: "growX", d: 0.2, o: [12, 14] }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
  ],
});
