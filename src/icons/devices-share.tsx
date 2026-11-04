import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesShare = createIcon("DevicesShare", "devices-share", {
  nodes: [
    ["path", { d: "M13 15v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" }],
    ["path", { d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.2, o: [18.5, 19.5] }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.2, o: [19, 19] }],
    ["path", { d: "M16 9h2" }],
  ],
});
