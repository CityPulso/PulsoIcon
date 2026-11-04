import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-imac-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacCancel = createIcon("DeviceImacCancel", "device-imac-cancel", {
  nodes: [
    ["path", { d: "M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" }],
    ["path", { d: "M3 13h12.5" }],
    ["path", { d: "M8 21h4.5" }],
    ["path", { d: "M10 17l-.5 4" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.05, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
