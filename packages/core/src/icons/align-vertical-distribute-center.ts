import { icon } from "../icon.js";

export const AlignVerticalDistributeCenter = icon("AlignVerticalDistributeCenter", "align-vertical-distribute-center", {
  nodes: [
    ["path", { d: "M22 17h-3" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M22 7h-5" }, { r: "draw", d: 0.06, o: [12, 12] }],
    ["path", { d: "M5 17H2" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M7 7H2" }, { r: "draw", d: 0.18, o: [12, 12] }],
    ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }, { r: "press", o: [12, 17] }],
    ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }, { r: "press", d: 0.1, o: [12, 7] }],
  ],
});
