import { icon } from "../icon.js";

export const LetterH = icon("LetterH", "letter-h", {
  text: true,
  nodes: [
    ["path", { d: "M18 20V4" }, { r: "grow", d: 0.08, o: [18, 12] }],
    ["path", { d: "M6 12H18" }, { r: "growX", d: 0.2, o: [6, 12] }],
    ["path", { d: "M6 20V4" }, { r: "grow", o: [6, 12] }],
  ],
});
