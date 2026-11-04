import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesExclamation = createIcon("DevicesExclamation", "devices-exclamation", {
  nodes: [
    ["path", { d: "M15 20h-1a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }],
    ["path", { d: "M16 9h2" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
