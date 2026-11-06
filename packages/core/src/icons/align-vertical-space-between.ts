import { icon } from "../icon.js";

export const AlignVerticalSpaceBetween = icon("AlignVerticalSpaceBetween", "align-vertical-space-between", {
  nodes: [
    ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }, { r: "slide", y: 1, a: 1.5, o: [12, 18] }],
    ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }, { r: "slide", y: -1, a: 1.5, o: [12, 6] }],
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "M2 3h20" }, { r: "growX", d: 0.1, o: [12, 12] }],
  ],
});
