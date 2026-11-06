import { icon } from "../icon.js";

export const SquareChevronsUp = icon("SquareChevronsUp", "square-chevrons-up", {
  nodes: [
    ["path", { d: "M15 10L12 7L9 10" }, { r: "slide", d: 0.08, y: -1, a: 2, o: [12, 8.5] }],
    ["path", { d: "M15 16L12 13L9 16" }, { r: "slide", y: -1, a: 2, o: [12, 14.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
