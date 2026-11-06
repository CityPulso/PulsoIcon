import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalPause = icon("TabletHorizontalPause", "tablet-horizontal-pause", {
  nodes: [
    ["path", { d: "M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M9 17h4" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 19.5] }],
  ],
});
