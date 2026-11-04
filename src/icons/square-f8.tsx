import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-f8" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareF8 = createIcon("SquareF8", "square-f8", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    [
      "path",
      { d: "M14.5 12h-.5a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1" },
      { r: "draw", d: 0.2 },
    ],
    ["path", { d: "M8 12h2" }, { r: "draw" }],
    ["path", { d: "M10 9h-2v6" }, { r: "draw", d: 0.05 }],
  ],
});
