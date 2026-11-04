import { createIcon } from "../runtime/createIcon.js";

export const SquarePoundSterling = createIcon("SquarePoundSterling", "square-pound-sterling", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M15.5 15.5a1.5 1.5 0 0 1-1.5 1.5H8.5a2 2 0 0 0 2-2V9.5a2.5 2.5 0 0 1 5 0" }, { r: "redraw", o: [12, 12] }],
    ["path", { d: "M9 12.5h4.5" }, { r: "growX", d: 0.2, o: [9, 12.5] }],
  ],
});
