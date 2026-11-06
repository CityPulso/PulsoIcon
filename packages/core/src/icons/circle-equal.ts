import { icon } from "../icon.js";

export const CircleEqual = icon("CircleEqual", "circle-equal", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 10h10" }, { r: "growX", d: 0.1, o: [7, 10] }],
    ["path", { d: "M7 14h10" }, { r: "growX", d: 0.2, o: [17, 14] }],
  ],
});
