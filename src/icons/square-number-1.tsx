import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-number-1" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareNumber1 = createIcon("SquareNumber1", "square-number-1", {
  text: true,
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 10l2 -2v8" }, { r: "draw", d: 0.1 }],
  ],
});
