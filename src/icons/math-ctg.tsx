import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-ctg" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathCtg = createIcon("MathCtg", "math-ctg", {
  nodes: [
    ["path", { d: "M10 8h4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" }, { r: "draw", d: 0.36 }],
    ["path", { d: "M12 8v8" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" }, { r: "draw" }],
  ],
});
