import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tablet-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceTabletOff = createIcon("DeviceTabletOff", "device-tablet-off", {
  nodes: [
    ["path", { d: "M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-15" }, { r: "tilt", a: 4, o: [12, 21] }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "press", a: 0.3, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }, { r: "tilt", a: 4, o: [12, 21] }],
    ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }, { r: "press", a: 0.3, o: [12, 17] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
