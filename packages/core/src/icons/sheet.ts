import { icon } from "../icon.js";

export const Sheet = icon("Sheet", "sheet", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }, { r: "growX", d: 0.05, o: [12, 12] }],
    ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }, { r: "growX", d: 0.11, o: [12, 12] }],
    ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }, { r: "grow", d: 0.15, o: [12, 15] }],
    ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }, { r: "grow", d: 0.21, o: [12, 15] }],
  ],
});
