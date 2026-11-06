import { icon } from "../icon.js";

export const CircleQuestionMark = icon("CircleQuestionMark", "circle-question-mark", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }, { r: "draw", d: 0.1, o: [12.005, 9.998] }],
    ["path", { d: "M12 17h.01" }, { r: "drop", d: 0.3, o: [12.005, 17] }],
  ],
});
