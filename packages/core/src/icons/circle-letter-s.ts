import { icon } from "../icon.js";

export const CircleLetterS = icon("CircleLetterS", "circle-letter-s", {
  text: true,
  nodes: [
    ["path", { d: "M14.5 8H11a2 2 0 100 4h2a2 2 0 110 4H9" }, { r: "redraw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
