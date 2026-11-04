import { createIcon } from "../runtime/createIcon.js";

export const SquareArrowOutUpLeft = createIcon("SquareArrowOutUpLeft", "square-arrow-out-up-left", {
  nodes: [
    ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m3 3 9 9" }, { r: "shoot", d: 0.05, x: -1, y: -1, a: 3, o: [7.5, 7.5] }],
    ["path", { d: "M3 9V3h6" }, { r: "shoot", d: 0.05, x: -1, y: -1, a: 3, o: [7.5, 7.5] }],
  ],
});
