import { createIcon } from "../runtime/createIcon.js";

export const LetterR = createIcon("LetterR", "letter-r", {
  text: true,
  nodes: [
    ["path", { d: "m10 12 8 8" }, { r: "draw", d: 0.3, o: [14, 16] }],
    ["path", { d: "M6 12h8a4 4 0 000-8H7a1 1 0 00-1 1v15" }, { r: "draw", o: [12, 12] }],
  ],
});
