import { icon } from "../icon.js";

// Adapted from Tabler Icons "row-remove" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RowRemove = icon("RowRemove", "row-remove", {
  nodes: [
    ["path", { d: "M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" }, { r: "shake", d: 0.3, a: 0.8 }],
    ["path", { d: "M10 16l4 4" }, { r: "draw" }],
    ["path", { d: "M10 20l4 -4" }, { r: "draw", d: 0.15 }],
  ],
});
