import { icon } from "../icon.js";

export const CircleChevronLeft = icon("CircleChevronLeft", "circle-chevron-left", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m14 16-4-4 4-4" }, { r: "bounce", d: 0.05, x: -1, a: 2, o: [12, 12] }],
  ],
});
