import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-4-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number4Small = createIcon("Number4Small", "number-4-small", {
  nodes: [
    ["path", { d: "M10 8v3a1 1 0 0 0 1 1h3" }, { r: "draw" }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.1 }],
  ],
});
