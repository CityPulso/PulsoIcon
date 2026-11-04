import { createIcon } from "../runtime/createIcon.js";

export const AlignVerticalDistributeEnd = createIcon("AlignVerticalDistributeEnd", "align-vertical-distribute-end", {
  nodes: [
    ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }, { r: "slide", y: 1, a: 2, o: [12, 17] }],
    ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }, { r: "slide", d: 0.1, y: 1, a: 2, o: [12, 7] }],
    ["path", { d: "M2 20h20" }, { r: "growX", o: [12, 15] }],
    ["path", { d: "M2 10h20" }, { r: "growX", d: 0.1, o: [12, 15] }],
  ],
});
