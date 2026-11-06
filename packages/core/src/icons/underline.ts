import { icon } from "../icon.js";

export const Underline = icon("Underline", "underline", {
  text: true,
  nodes: [
    ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }, { r: "press", a: 0.06, o: [12, 10] }],
    ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }, { r: "growX", d: 0.1, o: [4, 20] }],
  ],
});
