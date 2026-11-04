import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadCancel = createIcon("DeviceIpadCancel", "device-ipad-cancel", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.05, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
