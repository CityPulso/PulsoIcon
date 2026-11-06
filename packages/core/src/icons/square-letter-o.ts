import { icon } from "../icon.js";

export const SquareLetterO = icon("SquareLetterO", "square-letter-o", {
  text: true,
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "jelly", d: 0.05, a: 0.2, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
