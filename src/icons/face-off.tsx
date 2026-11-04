import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceOff = createIcon("FaceOff", "face-off", {
  nodes: [
    ["path", { d: "M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679 -2.322a9 9 0 0 0 -12.08 -12.086" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M9 10h.01" }, { r: "blink", d: 0.2, o: [9, 10] }],
    ["path", { d: "M15 10h.01" }, { r: "blink", d: 0.2, o: [15, 10] }],
    ["path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, { r: "draw", d: 0.3, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
