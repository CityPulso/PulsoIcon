import { icon } from "../icon.js";

export const CircleSlash = icon("CircleSlash", "circle-slash", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
