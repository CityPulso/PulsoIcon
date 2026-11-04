import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadSearch = createIcon("DeviceIpadSearch", "device-ipad-search", {
  nodes: [
    ["path", { d: "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M9 18h2" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, o: [18, 18] }],
  ],
});
