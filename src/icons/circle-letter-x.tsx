import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterX = createIcon("CircleLetterX", "circle-letter-x", {
  text: true,
  nodes: [
    ["path", { d: "m9 16 6-8" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "m9 8 6 8" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
