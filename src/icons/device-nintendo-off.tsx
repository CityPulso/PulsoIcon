import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-nintendo-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceNintendoOff = createIcon("DeviceNintendoOff", "device-nintendo-off", {
  nodes: [
    ["path", { d: "M4.713 4.718a4 4 0 0 0 -1.713 3.282v8a4 4 0 0 0 4 4h3v-10m0 -4v-2h-2" }, { r: "tilt", a: 4, o: [12, 12] }],
    ["path", { d: "M14 10v-6h3a4 4 0 0 1 4 4v8c0 .308 -.035 .608 -.1 .896m-1.62 2.39a3.982 3.982 0 0 1 -2.28 .714h-3v-6" }, { r: "tilt", a: 4, o: [12, 12] }],
    ["path", { d: "M5.5 8.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "press", a: 0.3, o: [6.5, 8.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3", fill: "none" }, { r: "tilt", a: 4, o: [12, 12] }],
    ["path", { d: "M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3", fill: "none" }, { r: "tilt", a: 4, o: [12, 12] }],
    ["path", { d: "M17.5 15.5h.01", fill: "none" }, { r: "tilt", a: 4, o: [12, 12] }],
    ["path", { d: "M6.5 8.5h.01", fill: "none" }, { r: "press", a: 0.3, o: [6.5, 8.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
