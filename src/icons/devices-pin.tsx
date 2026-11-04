import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesPin = createIcon("DevicesPin", "devices-pin", {
  nodes: [
    ["path", { d: "M13 14v-5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" }],
    [
      "path",
      { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 19] },
    ],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 18] }],
    ["path", { d: "M16 9h2" }],
  ],
});
