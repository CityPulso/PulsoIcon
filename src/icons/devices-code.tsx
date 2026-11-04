import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesCode = createIcon("DevicesCode", "devices-code", {
  nodes: [
    ["path", { d: "M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1 -1 1" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1, o: [21, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1, o: [16, 19] }],
    ["path", { d: "M16 9h2" }],
  ],
});
