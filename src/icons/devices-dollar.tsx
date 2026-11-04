import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesDollar = createIcon("DevicesDollar", "devices-dollar", {
  nodes: [
    ["path", { d: "M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1.5" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }],
    ["path", { d: "M16 9h2" }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "flip", d: 0.1, o: [19, 18] }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "flip", d: 0.1, o: [19, 18] }],
  ],
});
