import { icon } from "../icon.js";

// Adapted from Tabler Icons "filter-2-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Down = icon("Funnel2Down", "funnel-2-down", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M19 16v6" }, { r: "slide", y: 1, a: 2 }],
    ["path", { d: "M19 22l3 -3" }, { r: "slide", y: 1, a: 2 }],
    ["path", { d: "M19 22l-3 -3" }, { r: "slide", y: 1, a: 2 }],
  ],
});
