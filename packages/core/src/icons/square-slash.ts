import { icon } from "../icon.js";

export const SquareSlash = icon("SquareSlash", "square-slash", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
