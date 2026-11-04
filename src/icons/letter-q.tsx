import { createIcon } from "../runtime/createIcon.js";

export const LetterQ = createIcon("LetterQ", "letter-q", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "8" }, { r: "jelly", a: 0.15, o: [12, 12] }],
    ["path", { d: "M20 20L15 15" }, { r: "slide", d: 0.15, x: 1, y: 1, a: 1.5, o: [17.5, 17.5] }],
  ],
});
