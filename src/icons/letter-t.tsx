import { createIcon } from "../runtime/createIcon.js";

export const LetterT = createIcon("LetterT", "letter-t", {
  text: true,
  nodes: [
    ["path", { d: "M12 20V4" }, { r: "grow", d: 0.1, o: [12, 4] }],
    ["path", { d: "M5 4h14" }, { r: "growX", o: [12, 4] }],
  ],
});
