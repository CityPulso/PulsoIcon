import { icon } from "../icon.js";

export const SquareChevronRight = icon("SquareChevronRight", "square-chevron-right", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m10 8 4 4-4 4" }, { r: "bounce", d: 0.05, x: 1, a: 2, o: [12, 12] }],
  ],
});
