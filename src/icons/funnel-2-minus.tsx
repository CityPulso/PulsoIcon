import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Minus = createIcon("Funnel2Minus", "funnel-2-minus", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M16 19h6" }, { r: "draw" }],
  ],
});
