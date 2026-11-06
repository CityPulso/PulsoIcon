import { icon } from "../icon.js";

// Adapted from Tabler Icons "table-column" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableColumn = icon("TableColumn", "table-column", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M10 10h11" }],
    ["path", { d: "M10 3v18" }],
    ["path", { d: "M9 3l-6 6" }, { r: "draw" }],
    ["path", { d: "M10 7l-7 7" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M10 12l-7 7" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M10 17l-4 4" }, { r: "draw", d: 0.18 }],
  ],
});
