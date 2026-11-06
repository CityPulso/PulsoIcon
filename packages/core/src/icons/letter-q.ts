import { icon } from "../icon.js";

export const LetterQ = icon("LetterQ", "letter-q", {
  text: true,
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "8" }, { r: "jelly", a: 0.15, o: [12, 12] }],
    ["path", { d: "M20 20L15 15" }, { r: "slide", d: 0.15, x: 1, y: 1, a: 1.5, o: [17.5, 17.5] }],
  ],
});
