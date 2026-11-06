import { icon } from "../icon.js";

// Adapted from Tabler Icons "scan-position" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScanPosition = icon("ScanPosition", "scan-position", {
  nodes: [
    ["path", { d: "M12 17l3 -8l-8 3l3.5 1.5l1.5 3.5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 1.5 }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", o: [12, 12] }],
  ],
});
