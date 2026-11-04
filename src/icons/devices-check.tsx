import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesCheck = createIcon("DevicesCheck", "devices-check", {
  nodes: [
    ["path", { d: "M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" }],
    ["path", { d: "M16 9h2" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", d: 0.1 }],
  ],
});
