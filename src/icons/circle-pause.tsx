import { createIcon } from "../runtime/createIcon.js";

export const CirclePause = createIcon("CirclePause", "circle-pause", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }, { r: "grow", o: [10, 12] }],
    ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }, { r: "grow", d: 0.1, o: [14, 12] }],
  ],
});
