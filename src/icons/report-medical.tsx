import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "report-medical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReportMedical = createIcon("ReportMedical", "report-medical", {
  nodes: [
    ["path", { d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" }],
    ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M10 14l4 0" }, { r: "beat", o: [12, 14] }],
    ["path", { d: "M12 12l0 4" }, { r: "beat", o: [12, 14] }],
  ],
});
