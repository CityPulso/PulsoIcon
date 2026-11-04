import { createIcon } from "../runtime/createIcon.js";

export const SquareMenu = createIcon("SquareMenu", "square-menu", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 8h10" }, { r: "growX", d: 0.05, o: [7, 12] }],
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.11, o: [7, 12] }],
    ["path", { d: "M7 16h10" }, { r: "growX", d: 0.17, o: [7, 12] }],
  ],
});
