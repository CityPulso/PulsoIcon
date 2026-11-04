import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterU = createIcon("SquareLetterU", "square-letter-u", {
  nodes: [
    ["path", { d: "M15 8v5a3 3 0 1 1-6 0V8" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
