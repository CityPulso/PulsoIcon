import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "background" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Background = createIcon("Background", "background", {
  nodes: [
    ["path", { d: "M4 8l4 -4" }, { r: "draw" }],
    ["path", { d: "M14 4l-10 10" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M4 20l16 -16" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M20 10l-10 10" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M20 16l-4 4" }, { r: "draw", d: 0.24 }],
  ],
});
