import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-desktop-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorSearch = createIcon("MonitorSearch", "monitor-search", {
  nodes: [
    ["path", { d: "M11.5 16h-7.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6.5" }],
    ["path", { d: "M7 20h4" }],
    ["path", { d: "M9 16v4" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
  ],
});
