import { icon } from "../icon.js";

// Adapted from Tabler Icons "table-row" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableRow = icon("TableRow", "table-row", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M9 3l-6 6" }, { r: "draw" }],
    ["path", { d: "M14 3l-7 7" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M19 3l-7 7" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M21 6l-4 4" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 10v11" }],
  ],
});
