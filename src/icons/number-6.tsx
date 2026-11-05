import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-6" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number6 = createIcon("Number6", "number-6", {
  text: true,
  nodes: [
    ["path", { d: "M8 16a4 4 0 1 0 8 0v-1a4 4 0 1 0 -8 0" }, { r: "draw" }],
    ["path", { d: "M16 8a4 4 0 1 0 -8 0v8" }, { r: "draw", d: 0.15 }],
  ],
});
