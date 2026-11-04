import { createIcon } from "../runtime/createIcon.js";

export const ArrowUpRight = createIcon("ArrowUpRight", "arrow-up-right", {
  nodes: [
    ["path", { d: "M7 7h10v10" }, { r: "shoot", x: 1, y: -1, a: 5, o: [12, 12] }],
    ["path", { d: "M7 17 17 7" }, { r: "shoot", x: 1, y: -1, a: 5, o: [12, 12] }],
  ],
});
