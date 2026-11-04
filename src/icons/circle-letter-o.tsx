import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterO = createIcon("CircleLetterO", "circle-letter-o", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "jelly", d: 0.1, a: 0.25, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
