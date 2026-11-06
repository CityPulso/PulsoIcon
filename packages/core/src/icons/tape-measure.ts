import { icon } from "../icon.js";

export const TapeMeasure = icon("TapeMeasure", "tape-measure", {
  nodes: [
    ["circle", { cx: "10", cy: "11", r: "7" }, { r: "press", a: 0.05, o: [10, 11] }],
    ["circle", { cx: "10", cy: "11", r: "2" }, { r: "spin", a: 360, o: [10, 11] }],
    ["path", { d: "M10 18h11v-2" }, { r: "growX", d: 0.1, o: [10, 18] }],
  ],
});
