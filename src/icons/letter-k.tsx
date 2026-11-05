import { createIcon } from "../runtime/createIcon.js";

export const LetterK = createIcon("LetterK", "letter-k", {
  text: true,
  nodes: [
    ["path", { d: "M17 4 6 15" }, { r: "draw", d: 0.15, o: [11.5, 12] }],
    ["path", { d: "M6 20V4" }, { r: "grow", o: [6, 12] }],
    ["path", { d: "m9 12 8 8" }, { r: "draw", d: 0.15, o: [11.5, 12] }],
  ],
});
