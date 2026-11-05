import { createIcon } from "../runtime/createIcon.js";

export const LetterY = createIcon("LetterY", "letter-y", {
  text: true,
  nodes: [
    ["path", { d: "M12 12v8" }, { r: "grow", d: 0.2, o: [12, 12] }],
    ["path", { d: "m6 4 6 8 6-8" }, { r: "draw", o: [12, 8] }],
  ],
});
