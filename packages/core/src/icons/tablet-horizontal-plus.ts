import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalPlus = icon("TabletHorizontalPlus", "tablet-horizontal-plus", {
  nodes: [
    ["path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" }],
    ["path", { d: "M9 17h3.5" }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
  ],
});
