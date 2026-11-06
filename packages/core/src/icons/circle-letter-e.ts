import { icon } from "../icon.js";

export const CircleLetterE = icon("CircleLetterE", "circle-letter-e", {
  text: true,
  nodes: [
    ["path", { d: "M15 8H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H15" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 12h4" }, { r: "growX", d: 0.3, o: [9, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
