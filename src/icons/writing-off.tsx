import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "writing-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WritingOff = createIcon("WritingOff", "writing-off", {
  nodes: [
    ["path", { d: "M16 7h4" }, { r: "tilt", d: 0, a: 8, o: [18, 19] }],
    ["path", { d: "M16 16v1l2 2l.5 -.5m1.5 -2.5v-11c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v7" }, { r: "tilt", d: 0, a: 8, o: [18, 19] }],
    ["path", { d: "M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" }, { r: "draw", d: 0 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
