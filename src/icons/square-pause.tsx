import { createIcon } from "../runtime/createIcon.js";

export const SquarePause = createIcon("SquarePause", "square-pause", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }, { r: "grow", d: 0.05, o: [10, 12] }],
    ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }, { r: "grow", d: 0.15, o: [14, 12] }],
  ],
});
