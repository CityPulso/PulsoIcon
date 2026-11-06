import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-desktop-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorCode = icon("MonitorCode", "monitor-code", {
  nodes: [
    ["path", { d: "M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" }],
    ["path", { d: "M7 20h4" }],
    ["path", { d: "M9 16v4" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, a: 1.5 }],
  ],
});
