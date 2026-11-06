import { icon } from "../icon.js";

// Adapted from Tabler Icons "freeze-column" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FreezeColumn = icon("FreezeColumn", "freeze-column", {
  nodes: [
    ["path", { d: "M9 9.5l-6 6" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M9 4l-6 6" }, { r: "draw" }],
    ["path", { d: "M9 15l-5 5" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M9 3v18" }],
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
  ],
});
