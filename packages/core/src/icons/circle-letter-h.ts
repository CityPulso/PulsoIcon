import { icon } from "../icon.js";

export const CircleLetterH = icon("CircleLetterH", "circle-letter-h", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8" }, { r: "grow", d: 0.1, o: [9, 12] }],
    ["path", { d: "M15 16V8" }, { r: "grow", d: 0.18, o: [15, 12] }],
    ["path", { d: "M9 12h6" }, { r: "growX", d: 0.3, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
