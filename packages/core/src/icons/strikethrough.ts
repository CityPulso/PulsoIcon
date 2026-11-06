import { icon } from "../icon.js";

export const Strikethrough = icon("Strikethrough", "strikethrough", {
  text: true,
  nodes: [
    ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }, { r: "press", a: 0.05, o: [11.999, 12] }],
    ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }, { r: "press", a: 0.05, o: [11.999, 12] }],
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }, { r: "growX", d: 0.1, o: [4, 12] }],
  ],
});
