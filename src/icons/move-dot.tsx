import { createIcon } from "../runtime/createIcon.js";

export const MoveDot = createIcon("MoveDot", "move-dot", {
  nodes: [
    ["path", { d: "m9 5 3-3 3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 3.5] }],
    ["path", { d: "m9 19 3 3 3-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 20.5] }],
    ["path", { d: "m5 9-3 3 3 3" }, { r: "slide", x: -1, a: 1.5, o: [3.5, 12] }],
    ["path", { d: "m19 9 3 3-3 3" }, { r: "slide", x: 1, a: 1.5, o: [20.5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
