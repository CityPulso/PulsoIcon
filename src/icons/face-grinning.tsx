import { createIcon } from "../runtime/createIcon.js";

export const FaceGrinning = createIcon("FaceGrinning", "face-grinning", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302" }, { r: "jelly", d: 0.1, a: 0.15, o: [12.001, 15.996] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 6, o: [12, 12] }],
  ],
});
