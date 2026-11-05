import { createIcon } from "../runtime/createIcon.js";

export const ArrowDown10 = createIcon("ArrowDown10", "arrow-down-1-0", {
  text: true,
  nodes: [
    ["path", { d: "m3 16 4 4 4-4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 20V4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M17 10V4h-2" }, { r: "flip", o: [16, 7] }],
    ["path", { d: "M15 10h4" }, { r: "flip", o: [16, 7] }],
    ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }, { r: "flip", d: 0.1, o: [17, 17] }],
  ],
});
