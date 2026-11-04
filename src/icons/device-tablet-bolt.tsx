import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletBolt = createIcon("DeviceTabletBolt", "device-tablet-bolt", {
  nodes: [
    ["path", { d: "M13.5 21h-7.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
  ],
});
