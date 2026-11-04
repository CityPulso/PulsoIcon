import { createIcon } from "../runtime/createIcon.js";

export const AlignHorizontalDistributeEnd = createIcon("AlignHorizontalDistributeEnd", "align-horizontal-distribute-end", {
  nodes: [
    ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }, { r: "slide", x: 1, a: 2, o: [7, 12] }],
    ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }, { r: "slide", d: 0.1, x: 1, a: 2, o: [17, 12] }],
    ["path", { d: "M10 2v20" }, { r: "grow", o: [15, 12] }],
    ["path", { d: "M20 2v20" }, { r: "grow", d: 0.1, o: [15, 12] }],
  ],
});
