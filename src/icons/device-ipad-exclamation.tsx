import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadExclamation = createIcon("DeviceIpadExclamation", "device-ipad-exclamation", {
  nodes: [
    ["path", { d: "M15 21h-9a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M9 18h6" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
