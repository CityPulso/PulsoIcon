import { createIcon } from "../runtime/createIcon.js";

export const SquareUserRound = createIcon("SquareUserRound", "square-user-round", {
  nodes: [
    ["path", { d: "M18 21a6 6 0 0 0-12 0" }, { r: "rise", d: 0.1, a: 1, o: [12, 18] }],
    ["circle", { cx: "12", cy: "11", r: "4" }, { r: "float", d: 0.05, a: 1.5, o: [12, 11] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
