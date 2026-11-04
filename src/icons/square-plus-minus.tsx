import { createIcon } from "../runtime/createIcon.js";

export const SquarePlusMinus = createIcon("SquarePlusMinus", "square-plus-minus", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M19 5 5 19" }, { r: "draw" }],
    ["path", { d: "M6 8h4" }, { r: "spin", d: 0.1, a: 90, o: [8, 8] }],
    ["path", { d: "M8 6v4" }, { r: "spin", d: 0.1, a: 90, o: [8, 8] }],
    ["path", { d: "M14 16h4" }, { r: "growX", d: 0.2, o: [16, 16] }],
  ],
});
