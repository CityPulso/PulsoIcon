import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "typeface" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Typeface = createIcon("Typeface", "typeface", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -14" }],
    ["path", { d: "M17 17a2 2 0 0 1 -2 -2v-8h-5a2 2 0 0 0 -2 2" }, { r: "draw" }],
    ["path", { d: "M7 17a2.775 2.775 0 0 0 2.632 -1.897l.368 -1.103a13.4 13.4 0 0 1 3.236 -5.236l1.764 -1.764" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 14h5" }, { r: "draw", d: 0.3 }],
  ],
});
