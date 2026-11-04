import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterC = createIcon("CircleLetterC", "circle-letter-c", {
  nodes: [
    ["path", { d: "M15 9.354a4 4 0 1 0 0 5.292" }, { r: "draw", d: 0.1, o: [11.5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
