import { createIcon } from "../runtime/createIcon.js";

export const CopyX = createIcon("CopyX", "copy-x", {
  nodes: [
    ["path", { d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 9] }],
    ["rect", { x: "8", y: "8", width: "14", height: "14", rx: "2" }, { r: "shake", a: 1, o: [15, 15] }],
    ["path", { d: "m12.5 12.5 5 5" }, { r: "draw", d: 0.15, o: [15, 15] }],
    ["path", { d: "m12.5 17.5 5-5" }, { r: "draw", d: 0.25, o: [15, 15] }],
  ],
});
