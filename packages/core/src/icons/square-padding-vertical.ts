import { icon } from "../icon.js";

export const SquarePaddingVertical = icon("SquarePaddingVertical", "square-padding-vertical", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 17h8" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M8 7h8" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 7] }],
  ],
});
