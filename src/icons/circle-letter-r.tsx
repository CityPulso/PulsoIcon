import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterR = createIcon("CircleLetterR", "circle-letter-r", {
  text: true,
  nodes: [
    ["path", { d: "m11 12 4 4" }, { r: "draw", d: 0.3, o: [13, 14] }],
    ["path", { d: "M9 12h4a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V16" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
