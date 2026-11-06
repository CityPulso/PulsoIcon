import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-imac-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacPause = icon("DeviceImacPause", "device-imac-pause", {
  nodes: [
    ["path", { d: "M13 17h-9a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" }],
    ["path", { d: "M3 13h18" }],
    ["path", { d: "M8 21h5" }],
    ["path", { d: "M10 17l-.5 4" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, a: 0.3, o: [19, 19.5] }],
  ],
});
