import { icon } from "../icon.js";

export const CircleLetterF = icon("CircleLetterF", "circle-letter-f", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8.5a.5.5 0 0 1 .5-.5H15" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 12h4" }, { r: "growX", d: 0.3, o: [9, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
