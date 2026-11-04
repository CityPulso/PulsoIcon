import { createIcon } from "../runtime/createIcon.js";

export const ArrowLeftRightToLines = createIcon("ArrowLeftRightToLines", "arrow-left-right-to-lines", {
  nodes: [
    ["path", { d: "M3 5v14" }, { r: "press", a: 0.1, o: [3, 12] }],
    ["path", { d: "M21 5v14" }, { r: "press", a: 0.1, o: [21, 12] }],
    ["path", { d: "M7 12h10" }, { r: "drawOut", o: [12, 12] }],
    ["path", { d: "m10 9-3 3 3 3" }, { r: "slide", x: -1, a: 1, o: [8.5, 12] }],
    ["path", { d: "m14 9 3 3-3 3" }, { r: "slide", x: 1, a: 1, o: [15.5, 12] }],
  ],
});
