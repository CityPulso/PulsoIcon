import { createIcon } from "../runtime/createIcon.js";

export const SquareArrowUpLeft = createIcon("SquareArrowUpLeft", "square-arrow-up-left", {
  nodes: [
    ["path", { d: "M15 15 9 9" }, { r: "bounce", d: 0.05, x: -1, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9 15V9h6" }, { r: "bounce", d: 0.05, x: -1, y: -1, a: 1.5, o: [12, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
