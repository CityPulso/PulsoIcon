import { icon } from "../icon.js";

// Adapted from Tabler Icons "capture" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Capture = icon("Capture", "capture", {
  nodes: [
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -1, y: -1, a: 1, o: [6, 6] }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "slide", x: -1, y: 1, a: 1, o: [6, 18] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 1, y: -1, a: 1, o: [18, 6] }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "slide", x: 1, y: 1, a: 1, o: [18, 18] }],
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", d: 0.1, a: 0.15, o: [12, 12] }],
  ],
});
