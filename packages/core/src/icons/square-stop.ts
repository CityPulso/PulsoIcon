import { icon } from "../icon.js";

export const SquareStop = icon("SquareStop", "square-stop", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "stamp", d: 0.05, a: 0.4, o: [12, 12] }],
  ],
});
