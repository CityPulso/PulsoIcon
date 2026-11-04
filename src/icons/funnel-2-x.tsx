import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2X = createIcon("Funnel2X", "funnel-2-x", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h4" }],
    ["path", { d: "M22 22l-5 -5m0 5l5 -5" }, { r: "draw" }],
  ],
});
