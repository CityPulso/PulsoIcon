import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterY = createIcon("SquareLetterY", "square-letter-y", {
  nodes: [
    ["path", { d: "m9 8 3 4 3-4" }, { r: "draw", d: 0.05, o: [12, 10] }],
    ["path", { d: "M12 12v4" }, { r: "grow", d: 0.25, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
