import { icon } from "../icon.js";

// Adapted from Tabler Icons "devices-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesPause = icon("DevicesPause", "devices-pause", {
  nodes: [
    ["path", { d: "M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M16 9h2" }],
  ],
});
