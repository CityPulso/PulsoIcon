import { icon } from "../icon.js";

export const RectangleCircle = icon("RectangleCircle", "rectangle-circle", {
  nodes: [
    ["path", { d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }, { r: "press", d: 0.1, a: 0.05, o: [8, 12] }],
    ["circle", { cx: "14", cy: "12", r: "8" }, { r: "roll", x: 1, a: 1, o: [14, 12] }],
  ],
});
