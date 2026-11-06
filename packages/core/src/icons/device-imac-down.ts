import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-imac-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacDown = icon("DeviceImacDown", "device-imac-down", {
  nodes: [
    ["path", { d: "M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" }],
    ["path", { d: "M3 13h13" }],
    ["path", { d: "M8 21h4.5" }],
    ["path", { d: "M10 17l-.5 4" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1.5, o: [19, 20.5] }],
  ],
});
