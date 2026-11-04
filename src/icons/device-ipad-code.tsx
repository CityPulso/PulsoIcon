import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadCode = createIcon("DeviceIpadCode", "device-ipad-code", {
  nodes: [
    ["path", { d: "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M9 18h2" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1, o: [21, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1, o: [16, 19] }],
  ],
});
