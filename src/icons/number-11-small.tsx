import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-11-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number11Small = createIcon("Number11Small", "number-11-small", {
  nodes: [
    ["path", { d: "M8 8h1v8" }, { r: "draw" }],
    ["path", { d: "M14 8h1v8" }, { r: "draw", d: 0.25 }],
  ],
});
