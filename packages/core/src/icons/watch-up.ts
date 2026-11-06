import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-watch-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchUp = icon("WatchUp", "watch-up", {
  nodes: [
    ["path", { d: "M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" }],
    ["path", { d: "M9 18v3h3.5" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, y: -1, a: 2 }],
  ],
});
