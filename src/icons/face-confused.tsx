import { createIcon } from "../runtime/createIcon.js";

export const FaceConfused = createIcon("FaceConfused", "face-confused", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M8 16.5c1.3-1 2.7-1 4 0s2.7 1 4 0" }, { r: "sway", d: 0.1, a: 8, o: [12, 16.5] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "tilt", a: 8, o: [12, 12] }],
  ],
});
