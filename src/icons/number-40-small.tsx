import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-40-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number40Small = createIcon("Number40Small", "number-40-small", {
  text: true,
  nodes: [
    ["path", { d: "M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M6 8v3a1 1 0 0 0 1 1h3" }, { r: "draw" }],
    ["path", { d: "M10 8v8" }, { r: "draw", d: 0.1 }],
  ],
});
