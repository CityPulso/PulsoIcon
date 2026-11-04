import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-watch-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchCheck = createIcon("WatchCheck", "watch-check", {
  nodes: [
    ["path", { d: "M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v5.5" }],
    ["path", { d: "M9 18v3h2.5" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", d: 0.1 }],
  ],
});
