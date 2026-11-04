import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "report-analytics" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReportAnalytics = createIcon("ReportAnalytics", "report-analytics", {
  nodes: [
    ["path", { d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" }],
    ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M9 17v-5" }, { r: "grow", o: [9, 17] }],
    ["path", { d: "M12 17v-1" }, { r: "grow", d: 0.1, o: [12, 17] }],
    ["path", { d: "M15 17v-3" }, { r: "grow", d: 0.2, o: [15, 17] }],
  ],
});
