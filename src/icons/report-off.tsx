import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "report-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReportOff = createIcon("ReportOff", "report-off", {
  nodes: [
    ["path", { d: "M5.576 5.595a2 2 0 0 0 -.576 1.405v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-8a2 2 0 0 0 -2 -2h-2" }, { r: "wobble", a: 2, o: [12, 12] }],
    ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 1 1 0 4h-2" }, { r: "lift", y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
