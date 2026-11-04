import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transition-top" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransitionTop = createIcon("TransitionTop", "transition-top", {
  nodes: [
    ["path", { d: "M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" }],
    ["path", { d: "M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6" }, { r: "press", a: 0.08, o: [12, 18] }],
    ["path", { d: "M12 15v-8" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
    ["path", { d: "M9 10l3 -3l3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
  ],
});
