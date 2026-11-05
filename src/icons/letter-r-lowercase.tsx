import { createIcon } from "../runtime/createIcon.js";

export const LetterRLowercase = createIcon("LetterRLowercase", "letter-r-lowercase", {
  text: true,
  nodes: [
    ["path", { d: "M8 10v10" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M8 14.5a4.5 4.5 0 0 1 4.5-4.5H16" }, { r: "draw", d: 0.15, o: [12, 15] }],
  ],
});
