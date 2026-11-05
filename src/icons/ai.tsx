import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ai = createIcon("Ai", "ai", {
  text: true,
  nodes: [
    ["path", { d: "M8 16v-6a2 2 0 1 1 4 0v6" }, { r: "draw" }],
    ["path", { d: "M8 13h4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 8v8" }, { r: "draw", d: 0.3 }],
  ],
});
