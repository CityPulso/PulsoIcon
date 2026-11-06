import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-ipad-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadPause = icon("DeviceIpadPause", "device-ipad-pause", {
  nodes: [
    ["path", { d: "M13 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M9 18h4" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, a: 0.3, o: [19, 19.5] }],
  ],
});
