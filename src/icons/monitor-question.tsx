import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-desktop-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorQuestion = createIcon("MonitorQuestion", "monitor-question", {
  nodes: [
    ["path", { d: "M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6.5" }],
    ["path", { d: "M7 20h8" }],
    ["path", { d: "M9 16v4" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.4, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.1 }],
  ],
});
