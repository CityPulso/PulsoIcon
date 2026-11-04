import { createIcon } from "../runtime/createIcon.js";

export const CornerLeftUp = createIcon("CornerLeftUp", "corner-left-up", {
  nodes: [
    ["path", { d: "M14 9 9 4 4 9" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [9, 6.5] }],
    ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }, { r: "redraw", o: [14.5, 12] }],
  ],
});
