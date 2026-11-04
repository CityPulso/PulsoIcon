import { createIcon } from "../runtime/createIcon.js";

export const MarginTop = createIcon("MarginTop", "margin-top", {
  nodes: [
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "slide", y: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 3h18" }, { r: "growX", d: 0.1, o: [12, 3] }],
  ],
});
