import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "capture-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CaptureOff = createIcon("CaptureOff", "capture-off", {
  nodes: [
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "slide", x: -0.7, y: 0.7, a: 1, o: [6, 18] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 0.7, y: -0.7, a: 1, o: [18, 6] }],
    ["path", { d: "M16 20h2c.554 0 1.055 -.225 1.417 -.589" }, { r: "slide", x: 0.7, y: 0.7, a: 1, o: [18, 19] }],
    ["path", { d: "M9.87 9.887a3 3 0 0 0 4.255 4.23m.58 -3.416a3.012 3.012 0 0 0 -1.4 -1.403" }, { r: "blink", d: 0.2, o: [12, 12] }],
    ["path", { d: "M4 8v-2c0 -.548 .22 -1.044 .577 -1.405" }, { r: "slide", x: -0.7, y: -0.7, a: 1, o: [5, 6] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
