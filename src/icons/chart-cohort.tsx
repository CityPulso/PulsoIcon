import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-cohort" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartCohort = createIcon("ChartCohort", "chart-cohort", {
  nodes: [
    ["path", { d: "M3 9h18v-6h-18v18h6v-18" }, { r: "draw" }],
    ["path", { d: "M3 15h12v-12" }, { r: "draw", d: 0.2 }],
  ],
});
