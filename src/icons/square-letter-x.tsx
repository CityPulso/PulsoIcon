import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterX = createIcon("SquareLetterX", "square-letter-x", {
  nodes: [
    ["path", { d: "m9 16 6-8" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "m9 8 6 8" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
