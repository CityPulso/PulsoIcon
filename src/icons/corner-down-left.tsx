import { createIcon } from "../runtime/createIcon.js";

export const CornerDownLeft = createIcon("CornerDownLeft", "corner-down-left", {
  nodes: [
    ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }, { r: "redraw", o: [12, 9.5] }],
    ["path", { d: "m9 10-5 5 5 5" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [6.5, 15] }],
  ],
});
