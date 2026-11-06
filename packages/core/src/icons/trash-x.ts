import { icon } from "../icon.js";

// Adapted from Tabler Icons "trash-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrashX = icon("TrashX", "trash-x", {
  nodes: [
    ["path", { d: "M4 7h16" }, { r: "lift", y: -1, a: -8, o: [12, 7] }],
    ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }],
    ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" }, { r: "lift", y: -1, a: -8, o: [12, 7] }],
    ["path", { d: "M10 12l4 4m0 -4l-4 4" }, { r: "draw", d: 0.15 }],
  ],
});
