import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-f7" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareF7 = createIcon("SquareF7", "square-f7", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M13 9h3l-1.5 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M8 12h2" }, { r: "draw" }],
    ["path", { d: "M10 9h-2v6" }, { r: "draw", d: 0.05 }],
  ],
});
