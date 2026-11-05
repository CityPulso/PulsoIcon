import { createIcon } from "../runtime/createIcon.js";

export const Variable = createIcon("Variable", "variable", {
  text: true,
  nodes: [
    ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }, { r: "slide", x: -1, a: 1.5, o: [6, 12] }],
    ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }, { r: "slide", x: 1, a: 1.5, o: [18, 12] }],
    ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
    ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
  ],
});
