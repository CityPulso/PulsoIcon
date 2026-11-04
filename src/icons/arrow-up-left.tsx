import { createIcon } from "../runtime/createIcon.js";

export const ArrowUpLeft = createIcon("ArrowUpLeft", "arrow-up-left", {
  nodes: [
    ["path", { d: "M7 17V7h10" }, { r: "shoot", x: -1, y: -1, a: 5, o: [12, 12] }],
    ["path", { d: "M17 17 7 7" }, { r: "shoot", x: -1, y: -1, a: 5, o: [12, 12] }],
  ],
});
