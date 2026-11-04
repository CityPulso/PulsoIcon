import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalX = createIcon("TabletHorizontalX", "tablet-horizontal-x", {
  nodes: [
    ["path", { d: "M13.5 20h-8.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M9 17h4" }],
  ],
});
