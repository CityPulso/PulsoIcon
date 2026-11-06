import { icon } from "../icon.js";

export const Treemap = icon("Treemap", "treemap", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11 3v18" }, { r: "draw", d: 0.05, o: [11, 12] }],
    ["path", { d: "M3 14h8" }, { r: "draw", d: 0.15, o: [7, 14] }],
    ["path", { d: "M11 10h10" }, { r: "draw", d: 0.2, o: [16, 10] }],
    ["path", { d: "M16 10v11" }, { r: "draw", d: 0.28, o: [16, 15.5] }],
  ],
});
