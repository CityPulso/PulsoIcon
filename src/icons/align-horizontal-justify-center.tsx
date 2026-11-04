import { createIcon } from "../runtime/createIcon.js";

export const AlignHorizontalJustifyCenter = createIcon("AlignHorizontalJustifyCenter", "align-horizontal-justify-center", {
  nodes: [
    ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }, { r: "slide", x: 1, a: 2, o: [5, 12] }],
    ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }, { r: "slide", x: -1, a: 2, o: [19, 12] }],
    ["path", { d: "M12 2v20" }, { r: "grow", o: [12, 12] }],
  ],
});
