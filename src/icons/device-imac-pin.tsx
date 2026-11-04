import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-imac-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacPin = createIcon("DeviceImacPin", "device-imac-pin", {
  nodes: [
    ["path", { d: "M12 17h-8a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" }],
    [
      "path",
      { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 19] },
    ],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 18] }],
    ["path", { d: "M3 13h11" }],
    ["path", { d: "M8 21h4.5" }],
    ["path", { d: "M10 17l-.5 4" }],
  ],
});
