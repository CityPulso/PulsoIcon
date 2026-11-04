import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Code = createIcon("Funnel2Code", "funnel-2-code", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h2" }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, a: 1.5 }],
  ],
});
