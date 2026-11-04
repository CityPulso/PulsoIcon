import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceIpadPlus = createIcon("DeviceIpadPlus", "device-ipad-plus", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M9 18h3" }],
    ["path", { d: "M16 19h6" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "pop", d: 0.1, o: [19, 19] }],
  ],
});
