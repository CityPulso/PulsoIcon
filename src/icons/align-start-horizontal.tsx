import { createIcon } from "../runtime/createIcon.js";

export const AlignStartHorizontal = createIcon("AlignStartHorizontal", "align-start-horizontal", {
  nodes: [
    ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }, { r: "grow", o: [7, 6] }],
    ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }, { r: "grow", d: 0.12, o: [17, 6] }],
    ["path", { d: "M22 2H2" }, { r: "growX", o: [12, 2] }],
  ],
});
