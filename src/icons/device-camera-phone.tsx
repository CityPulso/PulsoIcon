import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-camera-phone" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceCameraPhone = createIcon("DeviceCameraPhone", "device-camera-phone", {
  nodes: [
    ["path", { d: "M16 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" }, { r: "blink", d: 0.05, o: [18.5, 8.5] }],
    ["path", { d: "M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2" }],
    ["path", { d: "M17 15v-1" }, { r: "pop", d: 0.2, o: [17, 14.5] }],
  ],
});
