import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-f3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareF3 = createIcon("SquareF3", "square-f3", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M13 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M8 12h2" }, { r: "draw" }],
    ["path", { d: "M10 9h-2v6" }, { r: "draw", d: 0.05 }],
  ],
});
