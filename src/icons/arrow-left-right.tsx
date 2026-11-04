import { createIcon } from "../runtime/createIcon.js";

export const ArrowLeftRight = createIcon("ArrowLeftRight", "arrow-left-right", {
  nodes: [
    ["path", { d: "M8 3 4 7l4 4" }, { r: "slide", x: -1, a: 2, o: [12, 7] }],
    ["path", { d: "M4 7h16" }, { r: "slide", x: -1, a: 2, o: [12, 7] }],
    ["path", { d: "m16 21 4-4-4-4" }, { r: "slide", d: 0.1, x: 1, a: 2, o: [12, 17] }],
    ["path", { d: "M20 17H4" }, { r: "slide", d: 0.1, x: 1, a: 2, o: [12, 17] }],
  ],
});
