import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Pause = createIcon("Funnel2Pause", "funnel-2-pause", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h4" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
