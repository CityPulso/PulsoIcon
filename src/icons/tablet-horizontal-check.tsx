import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalCheck = createIcon("TabletHorizontalCheck", "tablet-horizontal-check", {
  nodes: [
    ["path", { d: "M11 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 17h2.5" }],
  ],
});
