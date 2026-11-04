import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalBolt = createIcon("TabletHorizontalBolt", "tablet-horizontal-bolt", {
  nodes: [
    ["path", { d: "M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" }],
    ["path", { d: "M9 17h4.5" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1 }],
  ],
});
