import { icon } from "../icon.js";

export const FaceExpressionless = icon("FaceExpressionless", "face-expressionless", {
  nodes: [
    ["path", { d: "M14 10h2" }, { r: "growX", o: [15, 10] }],
    ["path", { d: "M8 10h2" }, { r: "growX", d: 0.05, o: [9, 10] }],
    ["path", { d: "M8 16h8" }, { r: "growX", d: 0.15, o: [12, 16] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
