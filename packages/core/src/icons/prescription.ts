import { icon } from "../icon.js";

export const Prescription = icon("Prescription", "prescription", {
  nodes: [
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 17V7h3a2.5 2.5 0 0 1 0 5H9" }, { r: "draw", d: 0.05, o: [11, 12] }],
    ["path", { d: "m11.5 12 4.5 6" }, { r: "draw", d: 0.25, o: [13.75, 15] }],
    ["path", { d: "m13 18 3-3" }, { r: "draw", d: 0.35, o: [14.5, 16.5] }],
  ],
});
