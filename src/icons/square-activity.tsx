import { createIcon } from "../runtime/createIcon.js";

export const SquareActivity = createIcon("SquareActivity", "square-activity", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }, { r: "redraw", d: 0.05, o: [12, 12] }],
  ],
});
