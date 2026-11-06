import { icon } from "../icon.js";

export const SquareArrowRightExit = icon("SquareArrowRightExit", "square-arrow-right-exit", {
  nodes: [
    ["path", { d: "M10 12h11" }, { r: "shoot", d: 0.05, x: 1, a: 3, o: [15.5, 12] }],
    ["path", { d: "m17 16 4-4-4-4" }, { r: "shoot", d: 0.05, x: 1, a: 3, o: [15.5, 12] }],
    ["path", { d: "M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
