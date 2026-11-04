import { createIcon } from "../runtime/createIcon.js";

export const LetterMLowercase = createIcon("LetterMLowercase", "letter-m-lowercase", {
  nodes: [
    ["path", { d: "M5 10v10" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M5 13.5a3.5 3.5 0 0 1 7 0V20" }, { r: "draw", d: 0.15, o: [12, 15] }],
    ["path", { d: "M12 13.5a3.5 3.5 0 0 1 7 0V20" }, { r: "draw", d: 0.3, o: [12, 15] }],
  ],
});
