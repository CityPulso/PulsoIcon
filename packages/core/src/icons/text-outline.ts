import { icon } from "../icon.js";

// Adapted from Tabler Icons "text-outline" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextOutline = icon("TextOutline", "text-outline", {
  nodes: [
    ["path", { d: "M3 8v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" }, { r: "slide", y: -1, a: 1 }],
    ["path", { d: "M3 16v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" }, { r: "slide", y: 1, a: 1 }],
    ["path", { d: "M21.01 12h.01" }, { r: "pop", d: 0.2, o: [21, 12] }],
    ["path", { d: "M3.01 12h.01" }, { r: "pop", d: 0.2, o: [3, 12] }],
    ["path", { d: "M10 15v-4a2 2 0 1 1 4 0v4" }, { r: "draw" }],
    ["path", { d: "M10 13h4" }, { r: "draw", d: 0.2 }],
  ],
});
