import { icon } from "../icon.js";

export const SquareX = icon("SquareX", "square-x", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "m9 9 6 6" }, { r: "draw", d: 0.25, o: [12, 12] }],
  ],
});
