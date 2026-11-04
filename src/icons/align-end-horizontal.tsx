import { createIcon } from "../runtime/createIcon.js";

export const AlignEndHorizontal = createIcon("AlignEndHorizontal", "align-end-horizontal", {
  nodes: [
    ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }, { r: "grow", o: [7, 18] }],
    ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }, { r: "grow", d: 0.12, o: [17, 18] }],
    ["path", { d: "M22 22H2" }, { r: "growX", o: [12, 22] }],
  ],
});
