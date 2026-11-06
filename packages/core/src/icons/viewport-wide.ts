import { icon } from "../icon.js";

// Adapted from Tabler Icons "viewport-wide" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ViewportWide = icon("ViewportWide", "viewport-wide", {
  nodes: [
    ["path", { d: "M10 12h-7l3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M6 15l-3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M14 12h7l-3 -3" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M18 15l3 -3" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" }],
    ["path", { d: "M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" }],
  ],
});
