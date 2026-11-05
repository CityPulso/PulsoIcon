import { createIcon } from "../runtime/createIcon.js";

export const Pi = createIcon("Pi", "pi", {
  text: true,
  nodes: [
    ["line", { x1: "9", x2: "9", y1: "4", y2: "20" }, { r: "grow", d: 0.1, o: [9, 4] }],
    ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }, { r: "growX", o: [12, 5.5] }],
    ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }, { r: "draw", d: 0.15, o: [16.5, 12] }],
  ],
});
