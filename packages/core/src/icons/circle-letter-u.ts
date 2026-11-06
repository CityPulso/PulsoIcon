import { icon } from "../icon.js";

export const CircleLetterU = icon("CircleLetterU", "circle-letter-u", {
  text: true,
  nodes: [
    ["path", { d: "M15 8v5a3 3 0 1 1-6 0V8" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
