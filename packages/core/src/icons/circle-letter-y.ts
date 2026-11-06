import { icon } from "../icon.js";

export const CircleLetterY = icon("CircleLetterY", "circle-letter-y", {
  text: true,
  nodes: [
    ["path", { d: "m9 8 3 4 3-4" }, { r: "draw", d: 0.1, o: [12, 10] }],
    ["path", { d: "M12 12v4" }, { r: "grow", d: 0.3, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
