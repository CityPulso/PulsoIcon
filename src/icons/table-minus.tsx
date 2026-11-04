import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "table-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableMinus = createIcon("TableMinus", "table-minus", {
  nodes: [
    ["path", { d: "M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 3v18" }],
    ["path", { d: "M16 19h6" }, { r: "draw", d: 0.1 }],
  ],
});
