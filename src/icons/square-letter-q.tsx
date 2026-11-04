import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterQ = createIcon("SquareLetterQ", "square-letter-q", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "jelly", d: 0.05, a: 0.15, o: [12, 12] }],
    ["path", { d: "m16 16-2.5-2.5" }, { r: "slide", d: 0.2, x: 1, y: 1, a: 1, o: [14.75, 14.75] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
