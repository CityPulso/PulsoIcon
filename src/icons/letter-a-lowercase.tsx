import { createIcon } from "../runtime/createIcon.js";

export const LetterALowercase = createIcon("LetterALowercase", "letter-a-lowercase", {
  text: true,
  nodes: [
    ["path", { d: "M8 11c1-.7 2.3-1 3.7-1 3 0 4.8 1.3 4.8 4v6" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M16.5 15H10a2.5 2.5 0 0 0 0 5h2.5a4 4 0 0 0 4-4" }, { r: "draw", d: 0.15, o: [12, 15] }],
  ],
});
