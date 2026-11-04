import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletDollar = createIcon("DeviceTabletDollar", "device-tablet-dollar", {
  nodes: [
    ["path", { d: "M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v6" }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "flip", d: 0.1, o: [19, 18] }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "flip", d: 0.1, o: [19, 18] }],
  ],
});
