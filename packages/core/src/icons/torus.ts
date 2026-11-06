import { icon } from "../icon.js";

export const Torus = icon("Torus", "torus", {
  nodes: [
    ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }, { r: "jelly", d: 0.05, a: 0.3, o: [12, 11] }],
    ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
