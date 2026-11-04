import { createIcon } from "../runtime/createIcon.js";

export const LayoutFreeform = createIcon("LayoutFreeform", "layout-freeform", {
  nodes: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }, { r: "wobble", o: [6.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "4", rx: "1" }, { r: "wobble", d: 0.08, o: [17.5, 7.5] }],
    ["rect", { width: "7", height: "7", x: "4", y: "14", rx: "1" }, { r: "wobble", d: 0.16, o: [7.5, 17.5] }],
  ],
});
