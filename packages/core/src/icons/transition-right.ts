import { icon } from "../icon.js";

// Adapted from Tabler Icons "transition-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransitionRight = icon("TransitionRight", "transition-right", {
  nodes: [
    ["path", { d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" }],
    ["path", { d: "M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0" }, { r: "press", a: 0.08, o: [6, 12] }],
    ["path", { d: "M9 12h8" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
    ["path", { d: "M14 15l3 -3l-3 -3" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
  ],
});
