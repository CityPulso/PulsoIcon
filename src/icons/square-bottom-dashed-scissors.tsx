import { createIcon } from "../runtime/createIcon.js";

export const SquareBottomDashedScissors = createIcon("SquareBottomDashedScissors", "square-bottom-dashed-scissors", {
  nodes: [
    ["path", { d: "M14 21h1" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "m17 17-2.18-2.18" }, { r: "turn", d: 0.05, a: 12, o: [9, 12] }],
    ["path", { d: "M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M9 21h1" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M9.56 14.44 17 7" }, { r: "turn", d: 0.05, a: -12, o: [9, 12] }],
    ["path", { d: "M9.56 9.56 12 12" }, { r: "turn", d: 0.05, a: -12, o: [9, 12] }],
    ["circle", { cx: "8.5", cy: "15.5", r: "1.5" }, { r: "turn", d: 0.05, a: 12, o: [9, 12] }],
    ["circle", { cx: "8.5", cy: "8.5", r: "1.5" }, { r: "turn", d: 0.05, a: -12, o: [9, 12] }],
  ],
});
