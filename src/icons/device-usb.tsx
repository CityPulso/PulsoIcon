import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-usb" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceUsb = createIcon("DeviceUsb", "device-usb", {
  nodes: [
    ["path", { d: "M7 8h10v8a5 5 0 0 1 -10 0l0 -8" }, { r: "slide", d: 0, x: 0, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9 8v-5h6v5" }, { r: "slide", d: 0, x: 0, y: -1, a: 1.5, o: [12, 12] }],
  ],
});
