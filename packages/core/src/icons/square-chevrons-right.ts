import { icon } from "../icon.js";

export const SquareChevronsRight = icon("SquareChevronsRight", "square-chevrons-right", {
  nodes: [
    ["path", { d: "M14 15L17 12L14 9" }, { r: "slide", d: 0.08, x: 1, a: 2, o: [15.5, 12] }],
    ["path", { d: "M8 15L11 12L8 9" }, { r: "slide", x: 1, a: 2, o: [9.5, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
