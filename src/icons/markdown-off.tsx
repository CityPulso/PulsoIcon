import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "markdown-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MarkdownOff = createIcon("MarkdownOff", "markdown-off", {
  nodes: [
    ["path", { d: "M9 5h10a2 2 0 0 1 2 2v10" }],
    ["path", { d: "M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2" }],
    ["path", { d: "M7 15v-6l2 2l1 -1m1 1v4" }, { r: "draw", d: 0 }],
    ["path", { d: "M17.5 13.5l.5 -.5m-2 -1v-3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
