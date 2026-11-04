import { createIcon } from "../runtime/createIcon.js";

export const AlignHorizontalSpaceAround = createIcon("AlignHorizontalSpaceAround", "align-horizontal-space-around", {
  nodes: [
    ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }, { r: "jelly", o: [12, 12] }],
    ["path", { d: "M4 22V2" }, { r: "slide", x: -1, a: 1.5, o: [4, 12] }],
    ["path", { d: "M20 22V2" }, { r: "slide", x: 1, a: 1.5, o: [20, 12] }],
  ],
});
