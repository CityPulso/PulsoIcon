import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-watch-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchExclamation = icon("WatchExclamation", "watch-exclamation", {
  nodes: [
    ["path", { d: "M15 18h-6a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" }],
    ["path", { d: "M9 18v3h6v-3" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
