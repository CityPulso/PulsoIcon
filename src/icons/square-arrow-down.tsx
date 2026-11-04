import { createIcon } from "../runtime/createIcon.js";

export const SquareArrowDown = createIcon("SquareArrowDown", "square-arrow-down", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "bounce", d: 0.05, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "m8 12 4 4 4-4" }, { r: "bounce", d: 0.05, y: 1, a: 2, o: [12, 12] }],
  ],
});
