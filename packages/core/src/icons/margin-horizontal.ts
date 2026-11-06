import { icon } from "../icon.js";

export const MarginHorizontal = icon("MarginHorizontal", "margin-horizontal", {
  nodes: [
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "jelly", a: 0.2, o: [12, 12] }],
    ["path", { d: "M21 3v18" }, { r: "slide", x: 1, a: 1.5, o: [21, 12] }],
    ["path", { d: "M3 3v18" }, { r: "slide", x: -1, a: 1.5, o: [3, 12] }],
  ],
});
