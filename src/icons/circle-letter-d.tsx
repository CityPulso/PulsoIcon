import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterD = createIcon("CircleLetterD", "circle-letter-d", {
  text: true,
  nodes: [
    ["path", { d: "M12 8a4 4 0 010 8H9.412A.41.41 0 019 15.588V8.412A.41.41 0 019.412 8z" }, { r: "draw", d: 0.1, o: [12.5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
