import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-tablet-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletPin = icon("DeviceTabletPin", "device-tablet-pin", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v7" }],
    ["path", { d: "M12 16a1 1 0 0 0 0 2" }],
    [
      "path",
      { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 19] },
    ],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [19, 18] }],
  ],
});
