import { createIcon } from "../runtime/createIcon.js";

export const LetterPLowercase = createIcon("LetterPLowercase", "letter-p-lowercase", {
  nodes: [
    ["path", { d: "M7 10v12.5" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M7 15a5 5 0 1 0 10 0a5 5 0 1 0-10 0" }, { r: "draw", d: 0.15, o: [12, 15] }],
  ],
});
