import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalCancel = icon("TabletHorizontalCancel", "tablet-horizontal-cancel", {
  nodes: [
    ["path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" }],
    ["path", { d: "M9 17h3.5" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
