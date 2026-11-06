import { icon } from "../icon.js";

// Adapted from Tabler Icons "layout-kanban" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutKanban = icon("LayoutKanban", "layout-kanban", {
  nodes: [
    ["path", { d: "M4 4l6 0" }, { r: "draw" }],
    ["path", { d: "M14 4l6 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M4 10a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8" }, { r: "grow", o: [6, 8] }],
    ["path", { d: "M14 10a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" }, { r: "grow", d: 0.15, o: [16, 8] }],
  ],
});
