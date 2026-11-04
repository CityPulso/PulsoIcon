import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "input-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const InputX = createIcon("InputX", "input-x", {
  nodes: [
    ["path", { d: "M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h7" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw" }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.1 }],
  ],
});
