import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadOff = createIcon("DeviceIpadOff", "device-ipad-off", {
  nodes: [
    ["path", { d: "M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16" }, { r: "tilt", a: 5, o: [12, 22] }],
    ["path", { d: "M9 19h6" }, { r: "tilt", a: 5, o: [12, 22] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
