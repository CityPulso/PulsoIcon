import { createIcon } from "../runtime/createIcon.js";

export const SquareMoveVertical = createIcon("SquareMoveVertical", "square-move-vertical", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 7v10" }, { r: "drawOut", d: 0.05, o: [12, 12] }],
    ["path", { d: "m9 10 3-3 3 3" }, { r: "slide", y: -1, a: 1, o: [12, 8.5] }],
    ["path", { d: "m9 14 3 3 3-3" }, { r: "slide", y: 1, a: 1, o: [12, 15.5] }],
  ],
});
