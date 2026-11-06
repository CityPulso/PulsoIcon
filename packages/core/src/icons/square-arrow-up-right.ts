import { icon } from "../icon.js";

export const SquareArrowUpRight = icon("SquareArrowUpRight", "square-arrow-up-right", {
  nodes: [
    ["path", { d: "M15 15V9H9" }, { r: "bounce", d: 0.05, x: 1, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m9 15 6-6" }, { r: "bounce", d: 0.05, x: 1, y: -1, a: 1.5, o: [12, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
