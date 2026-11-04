import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-10" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number10 = createIcon("Number10", "number-10", {
  nodes: [
    ["path", { d: "M8 20v-16l-5 5" }, { r: "draw" }],
    ["path", { d: "M16 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4" }, { r: "draw", d: 0.15 }],
  ],
});
