import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-desktop-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorCancel = createIcon("MonitorCancel", "monitor-cancel", {
  nodes: [
    ["path", { d: "M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" }],
    ["path", { d: "M7 20h5" }],
    ["path", { d: "M9 16v4" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
