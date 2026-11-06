import { icon } from "../icon.js";

export const SquarePercent = icon("SquarePercent", "square-percent", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 9h.01" }, { r: "pop", d: 0.2, o: [9.005, 9] }],
    ["path", { d: "M15 15h.01" }, { r: "pop", d: 0.3, o: [15.005, 15] }],
  ],
});
