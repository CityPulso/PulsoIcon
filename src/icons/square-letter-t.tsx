import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterT = createIcon("SquareLetterT", "square-letter-t", {
  text: true,
  nodes: [
    ["path", { d: "M12 16V8" }, { r: "grow", d: 0.15, o: [12, 8] }],
    ["path", { d: "M9 8h6" }, { r: "growX", d: 0.05, o: [12, 8] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
