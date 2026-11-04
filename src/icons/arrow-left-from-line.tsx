import { createIcon } from "../runtime/createIcon.js";

export const ArrowLeftFromLine = createIcon("ArrowLeftFromLine", "arrow-left-from-line", {
  nodes: [
    ["path", { d: "m9 6-6 6 6 6" }, { r: "shoot", x: -1, a: 5, o: [10, 12] }],
    ["path", { d: "M3 12h14" }, { r: "shoot", x: -1, a: 5, o: [10, 12] }],
    ["path", { d: "M21 19V5" }, { r: "grow", o: [21, 12] }],
  ],
});
