import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eyeglass-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EyeglassOff = createIcon("EyeglassOff", "eyeglass-off", {
  nodes: [
    ["path", { d: "M5.536 5.546l-2.536 8.454" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M16 4h2l3 10" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M10 16h4" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" }, { r: "blink", d: 0.1, o: [17.5, 16.5] }],
    ["path", { d: "M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" }, { r: "blink", d: 0.1, o: [6.5, 16.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
