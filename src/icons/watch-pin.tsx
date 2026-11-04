import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-watch-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchPin = createIcon("WatchPin", "watch-pin", {
  nodes: [
    ["path", { d: "M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v2" }],
    ["path", { d: "M9 18v3h3.5" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [19, 19] }],
  ],
});
