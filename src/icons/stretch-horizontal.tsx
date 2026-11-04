import { createIcon } from "../runtime/createIcon.js";

export const StretchHorizontal = createIcon("StretchHorizontal", "stretch-horizontal", {
  nodes: [
    ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }, { r: "growX", o: [12, 7] }],
    ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }, { r: "growX", d: 0.1, o: [12, 17] }],
  ],
});
