import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tex" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Tex = createIcon("Tex", "tex", {
  nodes: [
    ["path", { d: "M9 8v-1h-6v1" }, { r: "draw" }],
    ["path", { d: "M6 15v-8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M21 15l-5 -8" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M16 15l5 -8" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M14 11h-4v8h4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 15h3" }, { r: "draw", d: 0.2 }],
  ],
});
