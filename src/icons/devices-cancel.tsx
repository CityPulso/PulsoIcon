import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesCancel = createIcon("DevicesCancel", "devices-cancel", {
  nodes: [
    ["path", { d: "M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.05, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M16 9h2" }],
  ],
});
