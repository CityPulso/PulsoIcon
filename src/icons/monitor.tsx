import { createIcon } from "../runtime/createIcon.js";

export const Monitor = createIcon("Monitor", "monitor", {
  nodes: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }, { r: "growX", d: 0.1, o: [12, 21] }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }, { r: "grow", d: 0.05, o: [12, 17] }],
  ],
});
