import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "robot-face" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RobotFace = createIcon("RobotFace", "robot-face", {
  nodes: [
    ["path", { d: "M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" }],
    ["path", { d: "M9 16c1 .667 2 1 3 1s2 -.333 3 -1" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M9 7l-1 -4" }, { r: "swing", a: -12, o: [9, 7] }],
    ["path", { d: "M15 7l1 -4" }, { r: "swing", a: 12, o: [15, 7] }],
    ["path", { d: "M9 12v-1" }, { r: "blink", o: [12, 11.5] }],
    ["path", { d: "M15 12v-1" }, { r: "blink", o: [12, 11.5] }],
  ],
});
