import { createIcon } from "../runtime/createIcon.js";

export const MarginRight = createIcon("MarginRight", "margin-right", {
  nodes: [
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "slide", x: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M21 3v18" }, { r: "grow", d: 0.1, o: [21, 12] }],
  ],
});
