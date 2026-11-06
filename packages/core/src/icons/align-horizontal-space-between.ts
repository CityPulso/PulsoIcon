import { icon } from "../icon.js";

export const AlignHorizontalSpaceBetween = icon("AlignHorizontalSpaceBetween", "align-horizontal-space-between", {
  nodes: [
    ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }, { r: "slide", x: -1, a: 1.5, o: [6, 12] }],
    ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }, { r: "slide", x: 1, a: 1.5, o: [18, 12] }],
    ["path", { d: "M3 2v20" }, { r: "grow", o: [12, 12] }],
    ["path", { d: "M21 2v20" }, { r: "grow", d: 0.1, o: [12, 12] }],
  ],
});
