import { createIcon } from "../runtime/createIcon.js";

export const SquareRadical = createIcon("SquareRadical", "square-radical", {
  nodes: [
    ["path", { d: "M7 12h2l2 5 2-10h4" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
