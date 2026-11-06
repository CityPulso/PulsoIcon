import { icon } from "../icon.js";

export const CircleArrowLeft = icon("CircleArrowLeft", "circle-arrow-left", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m12 8-4 4 4 4" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M16 12H8" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [12, 12] }],
  ],
});
