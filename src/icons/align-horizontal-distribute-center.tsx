import { createIcon } from "../runtime/createIcon.js";

export const AlignHorizontalDistributeCenter = createIcon("AlignHorizontalDistributeCenter", "align-horizontal-distribute-center", {
  nodes: [
    ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }, { r: "press", o: [7, 12] }],
    ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }, { r: "press", d: 0.1, o: [17, 12] }],
    ["path", { d: "M17 22v-5" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M17 7V2" }, { r: "draw", d: 0.06, o: [12, 12] }],
    ["path", { d: "M7 22v-3" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M7 5V2" }, { r: "draw", d: 0.18, o: [12, 12] }],
  ],
});
