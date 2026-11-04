import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-pc-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesPcOff = createIcon("DevicesPcOff", "devices-pc-off", {
  nodes: [
    ["path", { d: "M9 9v10h-6v-14h2" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M13 9h9v7h-2m-4 0h-4v-4" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M14 19h5" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M17 17v2" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M6 13v.01" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M6 16v.01" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
