import { createIcon } from "../runtime/createIcon.js";

export const ArrowRight = createIcon("ArrowRight", "arrow-right", {
  nodes: [
    ["path", { d: "M5 12h14" }, { r: "shoot", x: 1, a: 6, o: [12, 12] }],
    ["path", { d: "m12 5 7 7-7 7" }, { r: "shoot", x: 1, a: 6, o: [12, 12] }],
  ],
});
