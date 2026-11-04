import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-heart-monitor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceHeartMonitor = createIcon("DeviceHeartMonitor", "device-heart-monitor", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M4 9h6l1 -2l2 4l1 -2h6" }, { r: "draw", d: 0 }],
    ["path", { d: "M4 14h16" }],
    ["path", { d: "M14 17v.01" }, { r: "pop", d: 0.3, o: [14, 17] }],
    ["path", { d: "M17 17v.01" }, { r: "pop", d: 0.4, o: [17, 17] }],
  ],
});
