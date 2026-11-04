import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-desktop-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorPlus = createIcon("MonitorPlus", "monitor-plus", {
  nodes: [
    ["path", { d: "M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" }],
    ["path", { d: "M7 20h5" }],
    ["path", { d: "M9 16v4" }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
  ],
});
