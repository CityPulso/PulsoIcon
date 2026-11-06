import { icon } from "../icon.js";

export const Grid3x2 = icon("Grid3x2", "grid-3x2", {
  nodes: [
    ["path", { d: "M15 3v18" }, { r: "grow", d: 0.16, o: [12, 12] }],
    ["path", { d: "M3 12h18" }, { r: "growX", d: 0.2, o: [12, 12] }],
    ["path", { d: "M9 3v18" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
