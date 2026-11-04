import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletUp = createIcon("DeviceTabletUp", "device-tablet-up", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" }],
    ["path", { d: "M12.906 16.576a1 1 0 1 0 -.906 1.424" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 17.5] }],
  ],
});
