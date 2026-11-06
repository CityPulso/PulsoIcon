import { icon } from "../icon.js";

export const ZoomOut = icon("ZoomOut", "zoom-out", {
  nodes: [
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "press", a: 0.1, o: [11, 11] }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }, { r: "press", a: 0.1, o: [11, 11] }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }, { r: "growX", d: 0.05, o: [11, 11] }],
  ],
});
