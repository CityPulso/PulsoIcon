import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-usb" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "device-usb" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceUsb = createIcon("DeviceUsb", "device-usb", {
  nodes: [
    ["path", { d: "M7 8h10v8a5 5 0 0 1 -10 0l0 -8" }, { r: "slide", d: 0, x: 0, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9 8v-5h6v5" }, { r: "slide", d: 0, x: 0, y: -1, a: 1.5, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      { d: "M15 2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 1 1v8a6 6 0 1 1 -12 0v-8a1 1 0 0 1 1 -1h1v-4a1 1 0 0 1 1 -1zm-1 2h-4v3h4z", stroke: "none" },
      { r: "slide", d: 0, x: 0, y: -1, a: 1.5, o: [12, 12] },
    ],
  ],
});
