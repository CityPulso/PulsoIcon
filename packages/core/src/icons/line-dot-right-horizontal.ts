import { icon } from "../icon.js";

export const LineDotRightHorizontal = icon("LineDotRightHorizontal", "line-dot-right-horizontal", {
  nodes: [
    ["path", { d: "M 3 12 L 15 12" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["circle", { cx: "18", cy: "12", r: "3" }, { r: "bounce", x: 1, a: 2, o: [18, 12] }],
  ],
});
