import { icon } from "../icon.js";

export const Grid3X3 = icon("Grid3X3", "grid-3x3", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "growX", d: 0.2, o: [12, 12] }],
    ["path", { d: "M3 15h18" }, { r: "growX", d: 0.26, o: [12, 12] }],
    ["path", { d: "M9 3v18" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["path", { d: "M15 3v18" }, { r: "grow", d: 0.16, o: [12, 12] }],
  ],
});
