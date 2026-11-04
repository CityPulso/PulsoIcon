import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterA = createIcon("SquareLetterA", "square-letter-a", {
  nodes: [
    ["path", { d: "m8 16 3.453-7.648a.6.6 0 0 1 1.094 0L16 16" }, { r: "draw", d: 0.05, o: [12, 11.999] }],
    ["path", { d: "M15 14H9" }, { r: "growX", d: 0.25, o: [12, 14] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
