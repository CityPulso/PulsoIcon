import { icon } from "../icon.js";

export const BetweenVerticalEnd = icon("BetweenVerticalEnd", "between-vertical-end", {
  nodes: [
    ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }, { r: "slide", x: -1, a: 1.5, o: [6.5, 9.5] }],
    ["path", { d: "m9 22 3-3 3 3" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 20.5] }],
    ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }, { r: "slide", x: 1, a: 1.5, o: [17.5, 9.5] }],
  ],
});
