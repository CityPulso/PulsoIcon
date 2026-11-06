import { icon } from "../icon.js";

export const CircleLetterL = icon("CircleLetterL", "circle-letter-l", {
  text: true,
  nodes: [
    ["path", { d: "M9 8v7.5a.5.5 0 0 0 .5.5H15" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
