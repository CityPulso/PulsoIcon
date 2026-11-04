import { createIcon } from "../runtime/createIcon.js";

export const ArrowsInHorizontal = createIcon("ArrowsInHorizontal", "arrows-in-horizontal", {
  nodes: [
    ["path", { d: "M3 6v12" }, { r: "jelly", a: 0.08, o: [3, 12] }],
    ["path", { d: "M3 12h7" }, { r: "slide", x: 1, a: 1.5, o: [7, 12] }],
    ["path", { d: "m7 9 3 3-3 3" }, { r: "slide", x: 1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M21 6v12" }, { r: "jelly", a: 0.08, o: [21, 12] }],
    ["path", { d: "M21 12h-7" }, { r: "slide", x: -1, a: 1.5, o: [17, 12] }],
    ["path", { d: "m17 9-3 3 3 3" }, { r: "slide", x: -1, a: 1.5, o: [17, 12] }],
  ],
});
