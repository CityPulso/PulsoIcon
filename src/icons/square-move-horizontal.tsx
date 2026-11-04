import { createIcon } from "../runtime/createIcon.js";

export const SquareMoveHorizontal = createIcon("SquareMoveHorizontal", "square-move-horizontal", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 12h10" }, { r: "drawOut", d: 0.05, o: [12, 12] }],
    ["path", { d: "m10 9-3 3 3 3" }, { r: "slide", x: -1, a: 1, o: [8.5, 12] }],
    ["path", { d: "m14 9 3 3-3 3" }, { r: "slide", x: 1, a: 1, o: [15.5, 12] }],
  ],
});
