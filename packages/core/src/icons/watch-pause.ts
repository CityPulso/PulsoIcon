import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-watch-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchPause = icon("WatchPause", "watch-pause", {
  nodes: [
    ["path", { d: "M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" }],
    ["path", { d: "M9 18v3h4" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 19.5] }],
  ],
});
