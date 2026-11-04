import { createIcon } from "../runtime/createIcon.js";

export const StretchVertical = createIcon("StretchVertical", "stretch-vertical", {
  nodes: [
    ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }, { r: "grow", o: [7, 12] }],
    ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }, { r: "grow", d: 0.1, o: [17, 12] }],
  ],
});
