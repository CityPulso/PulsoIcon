import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-watch-stats" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchStats = createIcon("WatchStats", "watch-stats", {
  nodes: [
    ["path", { d: "M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6" }],
    ["path", { d: "M9 18v3h6v-3" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M9 14v-4" }, { r: "grow", d: 0.1, o: [9, 14] }],
    ["path", { d: "M12 14v-1" }, { r: "grow", d: 0.2, o: [12, 14] }],
    ["path", { d: "M15 14v-3" }, { r: "grow", d: 0.3, o: [15, 14] }],
  ],
});
