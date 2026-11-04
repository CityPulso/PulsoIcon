import { createIcon } from "../runtime/createIcon.js";

export const CornerRightDown = createIcon("CornerRightDown", "corner-right-down", {
  nodes: [
    ["path", { d: "m10 15 5 5 5-5" }, { r: "slide", d: 0.2, y: 1, a: 1.5, o: [15, 17.5] }],
    ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }, { r: "redraw", o: [9.5, 12] }],
  ],
});
