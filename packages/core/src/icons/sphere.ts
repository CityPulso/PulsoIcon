import { icon } from "../icon.js";

export const Sphere = icon("Sphere", "sphere", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "float", a: 1.5, o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "4" }, { r: "blink", d: 0.1, o: [12, 12] }],
  ],
});
