import { createIcon } from "../runtime/createIcon.js";

export const FaceNeutral = createIcon("FaceNeutral", "face-neutral", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M8 16h8" }, { r: "growX", d: 0.15, o: [12, 16] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
