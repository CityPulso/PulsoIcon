import { createIcon } from "../runtime/createIcon.js";

export const Ratio = createIcon("Ratio", "ratio", {
  nodes: [
    ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }, { r: "fold", d: 0.1, o: [12, 12] }],
  ],
});
