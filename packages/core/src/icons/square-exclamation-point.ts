import { icon } from "../icon.js";

export const SquareExclamationPoint = icon("SquareExclamationPoint", "square-exclamation-point", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }, { r: "pop", d: 0.25, o: [12.005, 16] }],
  ],
});
