import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-1-divide-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Math1Divide2 = createIcon("Math1Divide2", "math-1-divide-2", {
  nodes: [
    ["path", { d: "M5 12h14" }, { r: "growX", d: 0.15, o: [12, 12] }],
    ["path", { d: "M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 5l2 -2v6" }, { r: "draw" }],
  ],
});
