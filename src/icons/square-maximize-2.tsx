import { createIcon } from "../runtime/createIcon.js";

export const SquareMaximize2 = createIcon("SquareMaximize2", "square-maximize-2", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M13 7h4v4" }, { r: "slide", x: 1, y: -1, a: 1, o: [15, 9] }],
    ["path", { d: "m17 7-4 4" }, { r: "slide", x: 1, y: -1, a: 1, o: [15, 9] }],
    ["path", { d: "M11 17H7v-4" }, { r: "slide", x: -1, y: 1, a: 1, o: [9, 15] }],
    ["path", { d: "m7 17 4-4" }, { r: "slide", x: -1, y: 1, a: 1, o: [9, 15] }],
  ],
});
