import { icon } from "../icon.js";

export const SquareMinus = icon("SquareMinus", "square-minus", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 12h8" }, { r: "growX", d: 0.1, o: [12, 12] }],
  ],
});
