import { createIcon } from "../runtime/createIcon.js";

export const ArrowDown = createIcon("ArrowDown", "arrow-down", {
  nodes: [
    ["path", { d: "M12 5v14" }, { r: "shoot", y: 1, a: 6, o: [12, 12] }],
    ["path", { d: "m19 12-7 7-7-7" }, { r: "shoot", y: 1, a: 6, o: [12, 12] }],
  ],
});
