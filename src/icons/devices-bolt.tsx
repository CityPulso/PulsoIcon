import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesBolt = createIcon("DevicesBolt", "devices-bolt", {
  nodes: [
    ["path", { d: "M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M16 9h2" }],
  ],
});
