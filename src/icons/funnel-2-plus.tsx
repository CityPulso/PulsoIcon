import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Plus = createIcon("Funnel2Plus", "funnel-2-plus", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h10" }],
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M19 15v6" }, { r: "pop", o: [19, 18] }],
    ["path", { d: "M16 18h6" }, { r: "pop", o: [19, 18] }],
  ],
});
