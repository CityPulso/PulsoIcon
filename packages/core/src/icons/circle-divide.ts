import { icon } from "../icon.js";

export const CircleDivide = icon("CircleDivide", "circle-divide", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }, { r: "rise", d: 0.2, o: [12, 16] }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }, { r: "drop", d: 0.2, o: [12, 8] }],
  ],
});
