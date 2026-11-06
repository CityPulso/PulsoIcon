import { icon } from "../icon.js";

export const Crosshair = icon("Crosshair", "crosshair", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [20, 12] }],
    ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [4, 12] }],
    ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [12, 4] }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [12, 20] }],
  ],
});
