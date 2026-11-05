import { createIcon } from "../runtime/createIcon.js";

export const SquarePi = createIcon("SquarePi", "square-pi", {
  text: true,
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 7h10" }, { r: "growX", d: 0.05, o: [12, 7] }],
    ["path", { d: "M10 7v10" }, { r: "grow", d: 0.12, o: [10, 7] }],
    ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }, { r: "draw", d: 0.18, o: [15, 12] }],
  ],
});
