import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterD = createIcon("SquareLetterD", "square-letter-d", {
  text: true,
  nodes: [
    ["path", { d: "M12 8a4 4 0 010 8H9.412A.41.41 0 019 15.588V8.412A.41.41 0 019.412 8z" }, { r: "draw", d: 0.05, o: [12.5, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
