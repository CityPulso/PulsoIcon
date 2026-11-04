import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-imac-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacCode = createIcon("DeviceImacCode", "device-imac-code", {
  nodes: [
    ["path", { d: "M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" }],
    ["path", { d: "M3 13h18" }],
    ["path", { d: "M8 21h3.5" }],
    ["path", { d: "M10 17l-.5 4" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1, o: [21, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1, o: [16, 19] }],
  ],
});
