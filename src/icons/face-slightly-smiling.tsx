import { createIcon } from "../runtime/createIcon.js";

export const FaceSlightlySmiling = createIcon("FaceSlightlySmiling", "face-slightly-smiling", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M16.472 15a6 6 0 01-8.943 0" }, { r: "draw", d: 0.12, o: [12.001, 16] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 5, o: [12, 12] }],
  ],
});
