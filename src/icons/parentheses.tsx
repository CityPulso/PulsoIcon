import { createIcon } from "../runtime/createIcon.js";

export const Parentheses = createIcon("Parentheses", "parentheses", {
  nodes: [
    ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }, { r: "slide", x: -1, a: 1.5, o: [6, 12] }],
    ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }, { r: "slide", x: 1, a: 1.5, o: [18, 12] }],
  ],
});
