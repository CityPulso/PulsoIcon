import { createIcon } from "../runtime/createIcon.js";

export const ArrowRightFromLine = createIcon("ArrowRightFromLine", "arrow-right-from-line", {
  nodes: [
    ["path", { d: "M3 5v14" }, { r: "grow", o: [3, 12] }],
    ["path", { d: "M21 12H7" }, { r: "shoot", x: 1, a: 5, o: [14, 12] }],
    ["path", { d: "m15 18 6-6-6-6" }, { r: "shoot", x: 1, a: 5, o: [14, 12] }],
  ],
});
