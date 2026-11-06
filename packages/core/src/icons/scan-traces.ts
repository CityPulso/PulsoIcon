import { icon } from "../icon.js";

// Adapted from Tabler Icons "scan-traces" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScanTraces = icon("ScanTraces", "scan-traces", {
  nodes: [
    ["path", { d: "M11 12h6" }, { r: "growX", d: 0.15, o: [11, 12] }],
    ["path", { d: "M8 8h5" }, { r: "growX", d: 0.05, o: [8, 8] }],
    ["path", { d: "M9 16h5" }, { r: "growX", d: 0.25, o: [9, 16] }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", d: 0, o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", d: 0, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", d: 0, o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", d: 0, o: [12, 12] }],
  ],
});
