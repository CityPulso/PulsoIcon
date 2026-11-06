import { icon } from "../icon.js";

export const SquareChevronsDown = icon("SquareChevronsDown", "square-chevrons-down", {
  nodes: [
    ["path", { d: "M9 14L12 17L15 14" }, { r: "slide", d: 0.08, y: 1, a: 2, o: [12, 15.5] }],
    ["path", { d: "M9 8L12 11L15 8" }, { r: "slide", y: 1, a: 2, o: [12, 9.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
