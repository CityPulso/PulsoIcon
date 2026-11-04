import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-watch-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchPlus = createIcon("WatchPlus", "watch-plus", {
  nodes: [
    ["path", { d: "M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
    ["path", { d: "M9 18v3h3.5" }],
    ["path", { d: "M9 6v-3h6v3" }],
  ],
});
