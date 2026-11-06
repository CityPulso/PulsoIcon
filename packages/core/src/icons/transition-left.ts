import { icon } from "../icon.js";

// Adapted from Tabler Icons "transition-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransitionLeft = icon("TransitionLeft", "transition-left", {
  nodes: [
    ["path", { d: "M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" }],
    ["path", { d: "M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0" }, { r: "press", a: 0.08, o: [18, 12] }],
    ["path", { d: "M15 12h-8" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 2 }],
    ["path", { d: "M10 9l-3 3l3 3" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 2 }],
  ],
});
