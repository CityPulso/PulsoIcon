import { createIcon } from "../runtime/createIcon.js";

export const ArrowLeftDouble = createIcon("ArrowLeftDouble", "arrow-left-double", {
  nodes: [
    ["path", { d: "M20 12H4" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "m14 7-5 5 5 5" }, { r: "slide", d: 0.15, x: -1, a: 1.5, o: [11.5, 12] }],
    ["path", { d: "m9 7-5 5 5 5" }, { r: "slide", d: 0.25, x: -1, a: 1.5, o: [6.5, 12] }],
  ],
});
