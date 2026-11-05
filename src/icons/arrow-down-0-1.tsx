import { createIcon } from "../runtime/createIcon.js";

export const ArrowDown01 = createIcon("ArrowDown01", "arrow-down-0-1", {
  text: true,
  nodes: [
    ["path", { d: "m3 16 4 4 4-4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 20V4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }, { r: "flip", o: [17, 7] }],
    ["path", { d: "M17 20v-6h-2" }, { r: "flip", d: 0.1, o: [16, 17] }],
    ["path", { d: "M15 20h4" }, { r: "flip", d: 0.1, o: [16, 17] }],
  ],
});
