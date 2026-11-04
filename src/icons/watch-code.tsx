import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-watch-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchCode = createIcon("WatchCode", "watch-code", {
  nodes: [
    ["path", { d: "M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, a: 1.5 }],
    ["path", { d: "M9 18v3h3" }],
    ["path", { d: "M9 6v-3h6v3" }],
  ],
});
