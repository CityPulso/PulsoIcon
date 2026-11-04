import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "radar-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RadarOff = createIcon("RadarOff", "radar-off", {
  nodes: [
    ["path", { d: "M11.291 11.295a1 1 0 0 0 .709 1.705v8c2.488 0 4.74 -1.01 6.37 -2.642m1.675 -2.319a8.962 8.962 0 0 0 .955 -4.039h-5" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M16 9a5 5 0 0 0 -5.063 -1.88m-2.466 1.347a5 5 0 0 0 .53 7.535" }, { r: "pulse", d: 0.1, a: 0.06, o: [12, 12] }],
    ["path", { d: "M20.486 9a9 9 0 0 0 -12.525 -5.032m-2.317 1.675a9 9 0 0 0 3.36 14.852" }, { r: "pulse", d: 0.2, a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
