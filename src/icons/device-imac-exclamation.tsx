import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-imac-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacExclamation = createIcon("DeviceImacExclamation", "device-imac-exclamation", {
  nodes: [
    ["path", { d: "M15 17h-11a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" }],
    ["path", { d: "M3 13h13" }],
    ["path", { d: "M8 21h7" }],
    ["path", { d: "M10 17l-.5 4" }],
    ["path", { d: "M14 17l.5 4" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
