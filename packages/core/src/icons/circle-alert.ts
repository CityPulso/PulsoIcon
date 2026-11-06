import { icon } from "../icon.js";

export const CircleAlert = icon("CircleAlert", "circle-alert", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "shake", a: 1, o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }, { r: "pop", d: 0.25, o: [12.005, 16] }],
  ],
});
