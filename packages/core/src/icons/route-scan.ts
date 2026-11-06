import { icon } from "../icon.js";

// Adapted from Tabler Icons "route-scan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouteScan = icon("RouteScan", "route-scan", {
  nodes: [
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M7 12v-3h3" }, { r: "slide", d: 0.1, x: -0.7, y: -0.7, a: 1.5 }],
    ["path", { d: "M14 9h3v3" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 1.5 }],
    ["path", { d: "M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" }],
    ["path", { d: "M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" }],
  ],
});
