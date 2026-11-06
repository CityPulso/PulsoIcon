import { icon } from "../icon.js";

// Adapted from Tabler Icons "aspect-ratio" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AspectRatio = icon("AspectRatio", "aspect-ratio", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M7 12v-3h3" }, { r: "slide", x: -1, y: -1, a: 1, o: [8.5, 10.5] }],
    ["path", { d: "M17 12v3h-3" }, { r: "slide", x: 1, y: 1, a: 1, o: [15.5, 13.5] }],
  ],
});
