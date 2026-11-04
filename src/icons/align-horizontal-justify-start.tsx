import { createIcon } from "../runtime/createIcon.js";

export const AlignHorizontalJustifyStart = createIcon("AlignHorizontalJustifyStart", "align-horizontal-justify-start", {
  nodes: [
    ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }, { r: "slide", x: -1, a: 2.5, o: [14, 12] }],
    ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }, { r: "slide", d: 0.08, x: -1, a: 2.5, o: [14, 12] }],
    ["path", { d: "M2 2v20" }, { r: "grow", o: [2, 12] }],
  ],
});
