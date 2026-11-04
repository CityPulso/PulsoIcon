import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterR = createIcon("SquareLetterR", "square-letter-r", {
  nodes: [
    ["path", { d: "m11 12 4 4" }, { r: "draw", d: 0.25, o: [13, 14] }],
    ["path", { d: "M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
