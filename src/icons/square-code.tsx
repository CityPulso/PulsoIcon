import { createIcon } from "../runtime/createIcon.js";

export const SquareCode = createIcon("SquareCode", "square-code", {
  nodes: [
    ["path", { d: "m10 9-3 3 3 3" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [8.5, 12] }],
    ["path", { d: "m14 15 3-3-3-3" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [15.5, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
