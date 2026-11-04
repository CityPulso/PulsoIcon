import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletExclamation = createIcon("DeviceTabletExclamation", "device-tablet-exclamation", {
  nodes: [
    ["path", { d: "M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
