import { createIcon } from "../runtime/createIcon.js";

export const ArrowUp = createIcon("ArrowUp", "arrow-up", {
  nodes: [
    ["path", { d: "m5 12 7-7 7 7" }, { r: "shoot", y: -1, a: 6, o: [12, 12] }],
    ["path", { d: "M12 19V5" }, { r: "shoot", y: -1, a: 6, o: [12, 12] }],
  ],
});
