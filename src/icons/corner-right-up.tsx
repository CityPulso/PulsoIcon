import { createIcon } from "../runtime/createIcon.js";

export const CornerRightUp = createIcon("CornerRightUp", "corner-right-up", {
  nodes: [
    ["path", { d: "m10 9 5-5 5 5" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [15, 6.5] }],
    ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }, { r: "redraw", o: [9.5, 12] }],
  ],
});
