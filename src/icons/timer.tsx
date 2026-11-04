import { createIcon } from "../runtime/createIcon.js";

export const Timer = createIcon("Timer", "timer", {
  nodes: [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }, { r: "press", a: 0.2, o: [12, 2] }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }, { r: "spin", d: 0.05, a: 360, o: [12, 14] }],
    ["circle", { cx: "12", cy: "14", r: "8" }, { r: "pulse", a: 0.05, o: [12, 14] }],
  ],
});
