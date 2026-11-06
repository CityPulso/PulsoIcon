import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-desktop-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorExclamation = icon("MonitorExclamation", "monitor-exclamation", {
  nodes: [
    ["path", { d: "M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" }],
    ["path", { d: "M7 20h8" }],
    ["path", { d: "M9 16v4" }],
    ["path", { d: "M15 16v4" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
