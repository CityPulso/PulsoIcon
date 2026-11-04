import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "page-break" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PageBreak = createIcon("PageBreak", "page-break", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }, { r: "slide", y: -1, a: 1 }],
    ["path", { d: "M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1" }, { r: "slide", y: 1, a: 1 }],
    ["path", { d: "M3 14h3m4.5 0h3m4.5 0h3" }, { r: "fade" }],
    ["path", { d: "M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2" }, { r: "slide", y: -1, a: 1 }],
  ],
});
