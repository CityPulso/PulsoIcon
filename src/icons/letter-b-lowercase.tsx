import { createIcon } from "../runtime/createIcon.js";

export const LetterBLowercase = createIcon("LetterBLowercase", "letter-b-lowercase", {
  text: true,
  nodes: [
    ["path", { d: "M7 4v16" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M7 15a5 5 0 1 0 10 0a5 5 0 1 0-10 0" }, { r: "draw", d: 0.15, o: [12, 15] }],
  ],
});
