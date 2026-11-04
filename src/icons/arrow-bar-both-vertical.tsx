import { createIcon } from "../runtime/createIcon.js";

export const ArrowBarBothVertical = createIcon("ArrowBarBothVertical", "arrow-bar-both-vertical", {
  nodes: [
    ["path", { d: "M12 8V2" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "m9 5 3-3 3 3" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 3.5] }],
    ["path", { d: "M12 16v6" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 19] }],
    ["path", { d: "m9 19 3 3 3-3" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 20.5] }],
    ["path", { d: "M4 12h16" }, { r: "press", a: 0.1, o: [12, 12] }],
  ],
});
