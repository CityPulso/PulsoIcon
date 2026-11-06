import { icon } from "../icon.js";

export const SquareArrowLeft = icon("SquareArrowLeft", "square-arrow-left", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m12 8-4 4 4 4" }, { r: "bounce", d: 0.05, x: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M16 12H8" }, { r: "bounce", d: 0.05, x: -1, a: 2, o: [12, 12] }],
  ],
});
