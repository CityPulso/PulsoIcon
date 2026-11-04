import { createIcon } from "../runtime/createIcon.js";

export const ArrowUp10 = createIcon("ArrowUp10", "arrow-up-1-0", {
  nodes: [
    ["path", { d: "m3 8 4-4 4 4" }, { r: "bounce", y: -1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 4v16" }, { r: "bounce", y: -1, a: 2, o: [7, 12] }],
    ["path", { d: "M17 10V4h-2" }, { r: "flip", o: [16, 7] }],
    ["path", { d: "M15 10h4" }, { r: "flip", o: [16, 7] }],
    ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }, { r: "flip", d: 0.1, o: [17, 17] }],
  ],
});
