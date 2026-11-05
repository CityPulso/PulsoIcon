import { createIcon } from "../runtime/createIcon.js";

export const LetterJLowercase = createIcon("LetterJLowercase", "letter-j-lowercase", {
  text: true,
  nodes: [
    ["path", { d: "M13.5 10v9.5a3 3 0 0 1-3 3H9.5" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M13.5 6h.01" }, { r: "pop", d: 0.3, a: 0.5, o: [13.5, 6] }],
  ],
});
