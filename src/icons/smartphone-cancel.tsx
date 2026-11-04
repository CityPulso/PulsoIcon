import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneCancel = createIcon("SmartphoneCancel", "smartphone-cancel", {
  nodes: [
    ["path", { d: "M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
  ],
});
