import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "table-export" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableExport = createIcon("TableExport", "table-export", {
  nodes: [
    ["path", { d: "M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 3v18" }],
    ["path", { d: "M16 19h6" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
    ["path", { d: "M19 16l3 3l-3 3" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
  ],
});
