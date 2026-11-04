import { createIcon } from "../runtime/createIcon.js";

export const SquareArrowRightEnter = createIcon("SquareArrowRightEnter", "square-arrow-right-enter", {
  nodes: [
    ["path", { d: "m10 16 4-4-4-4" }, { r: "bounce", d: 0.05, x: 1, a: 2, o: [8.5, 12] }],
    ["path", { d: "M3 12h11" }, { r: "bounce", d: 0.05, x: 1, a: 2, o: [8.5, 12] }],
    ["path", { d: "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
