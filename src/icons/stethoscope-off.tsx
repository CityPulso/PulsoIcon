import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stethoscope-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StethoscopeOff = createIcon("StethoscopeOff", "stethoscope-off", {
  nodes: [
    ["path", { d: "M4.172 4.179a2 2 0 0 0 -1.172 1.821v3.5a5.5 5.5 0 0 0 9.856 3.358m1.144 -2.858v-4a2 2 0 0 0 -2 -2h-1" }],
    ["path", { d: "M8 15a6 6 0 0 0 10.714 3.712m1.216 -2.798c.046 -.3 .07 -.605 .07 -.914v-3" }, { r: "sway", a: 4, o: [8, 15] }],
    ["path", { d: "M11 3v2" }],
    ["path", { d: "M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "beat", o: [20, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
