import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "viewport-narrow" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ViewportNarrow = createIcon("ViewportNarrow", "viewport-narrow", {
  nodes: [
    ["path", { d: "M3 12h7l-3 -3" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M7 15l3 -3" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M21 12h-7l3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M17 15l-3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" }],
    ["path", { d: "M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1" }],
  ],
});
