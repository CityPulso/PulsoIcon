import { icon } from "../icon.js";

export const CircleChevronRight = icon("CircleChevronRight", "circle-chevron-right", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m10 8 4 4-4 4" }, { r: "bounce", d: 0.05, x: 1, a: 2, o: [12, 12] }],
  ],
});
