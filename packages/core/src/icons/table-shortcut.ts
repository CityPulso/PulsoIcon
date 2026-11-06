import { icon } from "../icon.js";

// Adapted from Tabler Icons "table-shortcut" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableShortcut = icon("TableShortcut", "table-shortcut", {
  nodes: [
    ["path", { d: "M3 13v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 3v11" }],
    ["path", { d: "M2 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M7 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5 }],
  ],
});
