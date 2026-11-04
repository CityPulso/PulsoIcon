import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "table-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableDown = createIcon("TableDown", "table-down", {
  nodes: [
    ["path", { d: "M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 3v18" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
