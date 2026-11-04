import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-computer-camera-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceComputerCamera2 = createIcon("DeviceComputerCamera2", "device-computer-camera-2", {
  nodes: [
    ["path", { d: "M17 14h-10a4 4 0 0 1 -4 -4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4a4 4 0 0 1 -4 4" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M15 14h-6v4h6v-4" }],
    ["path", { d: "M17 18h-10" }],
    ["path", { d: "M12 10.02v.01" }, { r: "blink", d: 0.15, o: [12, 10] }],
  ],
});
