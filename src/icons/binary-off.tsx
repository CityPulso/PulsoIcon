import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "binary-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BinaryOff = createIcon("BinaryOff", "binary-off", {
  nodes: [
    ["path", { d: "M11 7v-2h-1" }, { r: "pop", o: [10.5, 6] }],
    ["path", { d: "M18 19v-1" }, { r: "pop", d: 0.3, o: [18, 18.5] }],
    ["path", { d: "M15.5 5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5" }, { r: "pop", d: 0.06, o: [16.5, 7.5] }],
    ["path", { d: "M10.5 14h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5" }, { r: "pop", d: 0.18, o: [11.5, 16.5] }],
    ["path", { d: "M6 10v.01" }, { r: "pop", d: 0.12, o: [6, 10] }],
    ["path", { d: "M6 19v.01" }, { r: "pop", d: 0.24, o: [6, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
