import { createIcon } from "../runtime/createIcon.js";

export const SquareScissors = createIcon("SquareScissors", "square-scissors", {
  nodes: [
    ["path", { d: "m17 17-2.18-2.18" }, { r: "turn", d: 0.05, a: 12, o: [9, 12] }],
    ["path", { d: "M9.56 14.44 17 7" }, { r: "turn", d: 0.05, a: -12, o: [9, 12] }],
    ["path", { d: "M9.56 9.56 12 12" }, { r: "turn", d: 0.05, a: -12, o: [9, 12] }],
    ["circle", { cx: "8.5", cy: "15.5", r: "1.5" }, { r: "turn", d: 0.05, a: 12, o: [9, 12] }],
    ["circle", { cx: "8.5", cy: "8.5", r: "1.5" }, { r: "turn", d: 0.05, a: -12, o: [9, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
  ],
});
