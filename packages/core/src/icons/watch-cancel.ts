import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-watch-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchCancel = icon("WatchCancel", "watch-cancel", {
  nodes: [
    ["path", { d: "M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" }],
    ["path", { d: "M9 18v3h3" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
