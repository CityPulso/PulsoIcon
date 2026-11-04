import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Alt = createIcon("Alt", "alt", {
  nodes: [
    ["path", { d: "M4 16v-6a2 2 0 1 1 4 0v6" }, { r: "draw" }],
    ["path", { d: "M4 13h4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11 8v8h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 8h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M18 8v8" }, { r: "draw", d: 0.35 }],
  ],
});
