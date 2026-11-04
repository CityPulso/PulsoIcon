import { createIcon } from "../runtime/createIcon.js";

export const ArrowDownFromLine = createIcon("ArrowDownFromLine", "arrow-down-from-line", {
  nodes: [
    ["path", { d: "M19 3H5" }, { r: "growX", o: [12, 3] }],
    ["path", { d: "M12 21V7" }, { r: "shoot", y: 1, a: 5, o: [12, 14] }],
    ["path", { d: "m6 15 6 6 6-6" }, { r: "shoot", y: 1, a: 5, o: [12, 14] }],
  ],
});
