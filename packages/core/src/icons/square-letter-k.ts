import { icon } from "../icon.js";

export const SquareLetterK = icon("SquareLetterK", "square-letter-k", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8" }, { r: "grow", d: 0.05, o: [9, 12] }],
    ["path", { d: "m11 12 4 4" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "m15 8-6 6" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
