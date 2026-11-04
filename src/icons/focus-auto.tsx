import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "focus-auto" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FocusAuto = createIcon("FocusAuto", "focus-auto", {
  nodes: [
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "slide", d: 0, x: -1, y: -1, a: 1 }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "slide", d: 0, x: -1, y: 1, a: 1 }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "slide", d: 0, x: 1, y: -1, a: 1 }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "slide", d: 0, x: 1, y: 1, a: 1 }],
    ["path", { d: "M10 15v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 13h4" }, { r: "draw", d: 0.35 }],
  ],
});
