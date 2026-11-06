import { icon } from "../icon.js";

export const Brush = icon("Brush", "brush", {
  svg: { r: "tilt", a: 12, o: [20, 4] },
  nodes: [
    ["path", { d: "m11 10 3 3" }],
    ["path", { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" }, { r: "draw", d: 0.15, o: [5.999, 17.5] }],
    ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" }],
  ],
});
