import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transform" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Transform = createIcon("Transform", "transform", {
  nodes: [
    ["path", { d: "M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, { r: "pop", a: 0.2, o: [6, 6] }],
    ["path", { d: "M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, { r: "pop", d: 0.35, a: 0.2, o: [18, 18] }],
  ],
});
