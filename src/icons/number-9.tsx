import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-9" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number9 = createIcon("Number9", "number-9", {
  nodes: [
    ["path", { d: "M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" }, { r: "draw" }],
    ["path", { d: "M8 16a4 4 0 1 0 8 0v-8" }, { r: "draw", d: 0.15 }],
  ],
});
