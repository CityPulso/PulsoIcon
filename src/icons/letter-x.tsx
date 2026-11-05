import { createIcon } from "../runtime/createIcon.js";

export const LetterX = createIcon("LetterX", "letter-x", {
  text: true,
  nodes: [
    ["path", { d: "M18 4 6 20" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "m6 4 12 16" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
