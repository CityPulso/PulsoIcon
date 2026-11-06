import { icon } from "../icon.js";

export const SquareLetterF = icon("SquareLetterF", "square-letter-f", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8.5a.5.5 0 0 1 .5-.5H15" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M9 12h4" }, { r: "growX", d: 0.25, o: [9, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
