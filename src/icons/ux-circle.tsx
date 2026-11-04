import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ux-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UxCircle = createIcon("UxCircle", "ux-circle", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M7 10v2a2 2 0 1 0 4 0v-2" }, { r: "draw" }],
    ["path", { d: "M14 10l3 4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14 14l3 -4" }, { r: "draw", d: 0.25 }],
  ],
});
