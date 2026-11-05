import { createIcon } from "../runtime/createIcon.js";

export const LetterHLowercase = createIcon("LetterHLowercase", "letter-h-lowercase", {
  text: true,
  nodes: [
    ["path", { d: "M7 4v16" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M7 14a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v6" }, { r: "draw", d: 0.15, o: [12, 15] }],
  ],
});
