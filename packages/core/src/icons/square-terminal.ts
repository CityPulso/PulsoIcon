import { icon } from "../icon.js";

export const SquareTerminal = icon("SquareTerminal", "square-terminal", {
  nodes: [
    ["path", { d: "m7 11 2-2-2-2" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [8, 9] }],
    ["path", { d: "M11 13h4" }, { r: "flicker", d: 0.15, o: [13, 13] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
