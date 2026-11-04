import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "freeze-row-column" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FreezeRowColumn = createIcon("FreezeRowColumn", "freeze-row-column", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M15 3l-12 12" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M9.5 3l-6 6" }, { r: "draw" }],
    ["path", { d: "M20 3.5l-5.5 5.5" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M9 15l-5 5" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M21 9h-12v12" }],
  ],
});
