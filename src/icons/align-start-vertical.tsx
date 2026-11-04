import { createIcon } from "../runtime/createIcon.js";

export const AlignStartVertical = createIcon("AlignStartVertical", "align-start-vertical", {
  nodes: [
    ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }, { r: "growX", d: 0.12, o: [6, 17] }],
    ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }, { r: "growX", o: [6, 7] }],
    ["path", { d: "M2 2v20" }, { r: "grow", o: [2, 12] }],
  ],
});
