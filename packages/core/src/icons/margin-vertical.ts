import { icon } from "../icon.js";

export const MarginVertical = icon("MarginVertical", "margin-vertical", {
  nodes: [
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "jelly", a: 0.2, o: [12, 12] }],
    ["path", { d: "M3 21h18" }, { r: "slide", y: 1, a: 1.5, o: [12, 21] }],
    ["path", { d: "M3 3h18" }, { r: "slide", y: -1, a: 1.5, o: [12, 3] }],
  ],
});
