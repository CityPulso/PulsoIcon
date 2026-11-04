import { createIcon } from "../runtime/createIcon.js";

export const ArrowDownRight = createIcon("ArrowDownRight", "arrow-down-right", {
  nodes: [
    ["path", { d: "m7 7 10 10" }, { r: "shoot", x: 1, y: 1, a: 5, o: [12, 12] }],
    ["path", { d: "M17 7v10H7" }, { r: "shoot", x: 1, y: 1, a: 5, o: [12, 12] }],
  ],
});
