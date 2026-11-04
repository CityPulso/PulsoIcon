import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletDown = createIcon("DeviceTabletDown", "device-tablet-down", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1.5, o: [19, 20.5] }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
  ],
});
