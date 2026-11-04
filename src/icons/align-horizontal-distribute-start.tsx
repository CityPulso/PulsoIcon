import { createIcon } from "../runtime/createIcon.js";

export const AlignHorizontalDistributeStart = createIcon("AlignHorizontalDistributeStart", "align-horizontal-distribute-start", {
  nodes: [
    ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }, { r: "slide", x: -1, a: 2, o: [7, 12] }],
    ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }, { r: "slide", d: 0.1, x: -1, a: 2, o: [17, 12] }],
    ["path", { d: "M4 2v20" }, { r: "grow", o: [9, 12] }],
    ["path", { d: "M14 2v20" }, { r: "grow", d: 0.1, o: [9, 12] }],
  ],
});
