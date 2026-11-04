import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalCode = createIcon("TabletHorizontalCode", "tablet-horizontal-code", {
  nodes: [
    ["path", { d: "M11 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M9 17h2.5" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, a: 1.5 }],
  ],
});
