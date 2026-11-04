import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalShare = createIcon("TabletHorizontalShare", "tablet-horizontal-share", {
  nodes: [
    ["path", { d: "M12.5 20h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M9 17h3" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 2 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 2 }],
  ],
});
