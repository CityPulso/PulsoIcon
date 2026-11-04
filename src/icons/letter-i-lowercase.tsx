import { createIcon } from "../runtime/createIcon.js";

export const LetterILowercase = createIcon("LetterILowercase", "letter-i-lowercase", {
  nodes: [
    ["path", { d: "M12 10v10" }, { r: "draw", o: [12, 15] }],
    ["path", { d: "M12 6h.01" }, { r: "pop", d: 0.3, a: 0.5, o: [12, 6] }],
  ],
});
