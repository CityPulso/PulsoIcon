import { createIcon } from "../runtime/createIcon.js";

export const SquareQuestionMark = createIcon("SquareQuestionMark", "square-question-mark", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }, { r: "draw", d: 0.1, o: [12, 10] }],
    ["path", { d: "M12 17h.01" }, { r: "drop", d: 0.3, o: [12.005, 17] }],
  ],
});
