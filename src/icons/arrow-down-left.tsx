import { createIcon } from "../runtime/createIcon.js";

export const ArrowDownLeft = createIcon("ArrowDownLeft", "arrow-down-left", {
  nodes: [
    ["path", { d: "M17 7 7 17" }, { r: "shoot", x: -1, y: 1, a: 5, o: [12, 12] }],
    ["path", { d: "M17 17H7V7" }, { r: "shoot", x: -1, y: 1, a: 5, o: [12, 12] }],
  ],
});
