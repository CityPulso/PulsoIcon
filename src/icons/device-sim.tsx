import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-sim" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceSim = createIcon("DeviceSim", "device-sim", {
  nodes: [
    ["path", { d: "M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1" }],
    ["path", { d: "M9 11h3v6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M15 17v.01" }, { r: "pop", d: 0.34, o: [15, 17] }],
    ["path", { d: "M15 14v.01" }, { r: "pop", d: 0.27, o: [15, 14] }],
    ["path", { d: "M15 11v.01" }, { r: "pop", d: 0.2, o: [15, 11] }],
    ["path", { d: "M9 14v.01" }, { r: "pop", d: 0.27, o: [9, 14] }],
    ["path", { d: "M9 17v.01" }, { r: "pop", d: 0.34, o: [9, 17] }],
  ],
});
