import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "satellite-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SatelliteOff = createIcon("SatelliteOff", "satellite-off", {
  nodes: [
    ["path", { d: "M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293" }, { r: "turn", a: 15, o: [11, 11] }],
    ["path", { d: "M6 10l-3 3l3 3l3 -3" }, { r: "turn", a: 15, o: [11, 11] }],
    ["path", { d: "M10 6l3 -3l3 3l-3 3" }, { r: "turn", a: 15, o: [11, 11] }],
    ["path", { d: "M12 12l1.5 1.5" }, { r: "turn", a: 15, o: [11, 11] }],
    ["path", { d: "M14.5 17c.69 0 1.316 -.28 1.769 -.733" }, { r: "pop", d: 0.1, o: [15, 16] }],
    ["path", { d: "M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741" }, { r: "pop", d: 0.25, o: [18, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
