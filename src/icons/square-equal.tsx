import { createIcon } from "../runtime/createIcon.js";

export const SquareEqual = createIcon("SquareEqual", "square-equal", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 10h10" }, { r: "growX", d: 0.1, o: [7, 10] }],
    ["path", { d: "M7 14h10" }, { r: "growX", d: 0.2, o: [17, 14] }],
  ],
});
