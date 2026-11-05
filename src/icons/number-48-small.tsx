import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-48-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number48Small = createIcon("Number48Small", "number-48-small", {
  text: true,
  nodes: [
    [
      "path",
      { d: "M16 12h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" },
      { r: "draw", d: 0.25 },
    ],
    ["path", { d: "M6 8v3a1 1 0 0 0 1 1h3" }, { r: "draw" }],
    ["path", { d: "M10 8v8" }, { r: "draw", d: 0.1 }],
  ],
});
