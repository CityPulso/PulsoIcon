import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-12-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number12Small = createIcon("Number12Small", "number-12-small", {
  text: true,
  nodes: [
    ["path", { d: "M8 8h1v8" }, { r: "draw" }],
    ["path", { d: "M13 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.25 }],
  ],
});
