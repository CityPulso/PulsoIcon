import { createIcon } from "../runtime/createIcon.js";

export const CornerLeftDown = createIcon("CornerLeftDown", "corner-left-down", {
  nodes: [
    ["path", { d: "m14 15-5 5-5-5" }, { r: "slide", d: 0.2, y: 1, a: 1.5, o: [9, 17.5] }],
    ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }, { r: "redraw", o: [14.5, 12] }],
  ],
});
