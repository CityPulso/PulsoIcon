import { createIcon } from "../runtime/createIcon.js";

export const CopyPlus = createIcon("CopyPlus", "copy-plus", {
  nodes: [
    ["line", { x1: "15", x2: "15", y1: "12", y2: "18" }, { r: "spin", d: 0.15, a: 90, o: [15, 15] }],
    ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }, { r: "spin", d: 0.15, a: 90, o: [15, 15] }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }, { r: "press", a: 0.05, o: [15, 15] }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 9] }],
  ],
});
