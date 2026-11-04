import { createIcon } from "../runtime/createIcon.js";

export const LetterH = createIcon("LetterH", "letter-h", {
  nodes: [
    ["path", { d: "M18 20V4" }, { r: "grow", d: 0.08, o: [18, 12] }],
    ["path", { d: "M6 12H18" }, { r: "growX", d: 0.2, o: [6, 12] }],
    ["path", { d: "M6 20V4" }, { r: "grow", o: [6, 12] }],
  ],
});
