import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Share = createIcon("Funnel2Share", "funnel-2-share", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h3.5" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 17v4.5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 17h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
  ],
});
