import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterJ = createIcon("CircleLetterJ", "circle-letter-j", {
  nodes: [
    ["path", { d: "M15 8v5a3 3 0 1 1-6 0" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
