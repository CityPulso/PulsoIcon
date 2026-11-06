import { icon } from "../icon.js";

// Adapted from Tabler Icons "transition-bottom" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransitionBottom = icon("TransitionBottom", "transition-bottom", {
  nodes: [
    ["path", { d: "M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" }],
    ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" }, { r: "press", a: 0.08, o: [12, 6] }],
    ["path", { d: "M12 9v8" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M9 14l3 3l3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
