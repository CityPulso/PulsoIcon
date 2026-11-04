import { createIcon } from "../runtime/createIcon.js";

export const ListIndentIncrease = createIcon("ListIndentIncrease", "list-indent-increase", {
  nodes: [
    ["path", { d: "M21 5H11" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [16, 12] }],
    ["path", { d: "M21 12H11" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [16, 12] }],
    ["path", { d: "M21 19H11" }, { r: "slide", d: 0.15, x: 1, a: 1, o: [16, 12] }],
    ["path", { d: "m3 8 4 4-4 4" }, { r: "slide", x: 1, a: 2, o: [5, 12] }],
  ],
});
