import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-42-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number42Small = createIcon("Number42Small", "number-42-small", {
  text: true,
  nodes: [
    ["path", { d: "M14 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M6 8v3a1 1 0 0 0 1 1h3" }, { r: "draw" }],
    ["path", { d: "M10 8v8" }, { r: "draw", d: 0.1 }],
  ],
});
