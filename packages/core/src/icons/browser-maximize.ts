import { icon } from "../icon.js";

// Adapted from Tabler Icons "browser-maximize" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrowserMaximize = icon("BrowserMaximize", "browser-maximize", {
  nodes: [
    ["path", { d: "M4 8h8" }],
    ["path", { d: "M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5" }],
    ["path", { d: "M8 4v4" }],
    ["path", { d: "M16 8l5 -5" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.2, o: [18.5, 5.5] }],
    ["path", { d: "M21 7.5v-4.5h-4.5" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.2, o: [18.5, 5.5] }],
  ],
});
