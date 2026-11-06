import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-ipad-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadUp = icon("DeviceIpadUp", "device-ipad-up", {
  nodes: [
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 17.5] }],
    ["path", { d: "M13.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" }],
  ],
});
