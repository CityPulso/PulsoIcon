import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterH = createIcon("SquareLetterH", "square-letter-h", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8" }, { r: "grow", d: 0.05, o: [9, 12] }],
    ["path", { d: "M15 16V8" }, { r: "grow", d: 0.13, o: [15, 12] }],
    ["path", { d: "M9 12h6" }, { r: "growX", d: 0.25, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
