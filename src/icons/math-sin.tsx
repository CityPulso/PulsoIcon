import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-sin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathSin = createIcon("MathSin", "math-sin", {
  nodes: [
    ["path", { d: "M4 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" }, { r: "draw" }],
    ["path", { d: "M12 8v8" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M16 16v-8l4 8v-8" }, { r: "draw", d: 0.24 }],
  ],
});
