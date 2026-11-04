import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "presentation-analytics" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PresentationAnalytics = createIcon("PresentationAnalytics", "presentation-analytics", {
  nodes: [
    ["path", { d: "M9 12v-4" }, { r: "grow", o: [9, 12] }],
    ["path", { d: "M15 12v-2" }, { r: "grow", d: 0.2, o: [15, 12] }],
    ["path", { d: "M12 12v-1" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["path", { d: "M3 4h18" }],
    ["path", { d: "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" }],
    ["path", { d: "M12 16v4" }],
    ["path", { d: "M9 20h6" }],
  ],
});
