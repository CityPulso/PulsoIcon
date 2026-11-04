import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-8" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number8 = createIcon("Number8", "number-8", {
  nodes: [
    ["path", { d: "M8 8a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "draw" }],
    ["path", { d: "M8 16a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "draw", d: 0.15 }],
  ],
});
