import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletSearch = createIcon("DeviceTabletSearch", "device-tablet-search", {
  nodes: [
    ["path", { d: "M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v7" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, o: [18, 18] }],
  ],
});
