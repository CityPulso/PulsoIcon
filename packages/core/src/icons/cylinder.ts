import { icon } from "../icon.js";

export const Cylinder = icon("Cylinder", "cylinder", {
  nodes: [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1.5, o: [12, 5] }],
    ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }, { r: "press", d: 0.1, a: 0.04, o: [12, 22] }],
  ],
});
