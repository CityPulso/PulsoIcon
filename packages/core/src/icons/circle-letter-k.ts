import { icon } from "../icon.js";

export const CircleLetterK = icon("CircleLetterK", "circle-letter-k", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8" }, { r: "grow", d: 0.1, o: [9, 12] }],
    ["path", { d: "m11 12 4 4" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "m15 8-6 6" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
