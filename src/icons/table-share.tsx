import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "table-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableShare = createIcon("TableShare", "table-share", {
  nodes: [
    ["path", { d: "M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 3v18" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 2 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 2 }],
  ],
});
