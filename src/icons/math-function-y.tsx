import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-function-y" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathFunctionY = createIcon("MathFunctionY", "math-function-y", {
  nodes: [
    ["path", { d: "M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" }, { r: "draw" }],
    ["path", { d: "M5 12h6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M15 12l3 5.063" }, { r: "pop", d: 0.35, o: [18, 16] }],
    ["path", { d: "M21 12l-4.8 9" }, { r: "pop", d: 0.35, o: [18, 16] }],
  ],
});
