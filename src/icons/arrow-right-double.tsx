import { createIcon } from "../runtime/createIcon.js";

export const ArrowRightDouble = createIcon("ArrowRightDouble", "arrow-right-double", {
  nodes: [
    ["path", { d: "M4 12h16" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "m10 7 5 5-5 5" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [12.5, 12] }],
    ["path", { d: "m15 7 5 5-5 5" }, { r: "slide", d: 0.25, x: 1, a: 1.5, o: [17.5, 12] }],
  ],
});
