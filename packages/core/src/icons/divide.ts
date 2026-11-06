import { icon } from "../icon.js";

export const Divide = icon("Divide", "divide", {
  nodes: [
    ["circle", { cx: "12", cy: "6", r: "1" }, { r: "drop", a: 3, o: [12, 6] }],
    ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "18", r: "1" }, { r: "drop", y: 1, a: -3, o: [12, 18] }],
  ],
});
