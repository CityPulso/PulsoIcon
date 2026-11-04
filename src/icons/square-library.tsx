import { createIcon } from "../runtime/createIcon.js";

export const SquareLibrary = createIcon("SquareLibrary", "square-library", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 7v10" }, { r: "grow", d: 0.05, o: [7, 17] }],
    ["path", { d: "M11 7v10" }, { r: "grow", d: 0.1, o: [11, 17] }],
    ["path", { d: "m15 7 2 10" }, { r: "turn", d: 0.15, a: -8, o: [17, 17] }],
  ],
});
