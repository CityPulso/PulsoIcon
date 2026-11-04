import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalExclamation = createIcon("TabletHorizontalExclamation", "tablet-horizontal-exclamation", {
  nodes: [
    ["path", { d: "M15 20h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M9 17h6" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
