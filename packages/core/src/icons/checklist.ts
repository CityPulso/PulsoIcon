import { icon } from "../icon.js";

// Adapted from Tabler Icons "checklist" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Checklist = icon("Checklist", "checklist", {
  nodes: [
    ["path", { d: "M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M14 19l2 2l4 -4" }, { r: "draw" }],
    ["path", { d: "M9 8h4" }, { r: "growX", d: 0.2, o: [9, 8] }],
    ["path", { d: "M9 12h2" }, { r: "growX", d: 0.3, o: [9, 12] }],
  ],
});
