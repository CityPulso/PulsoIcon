import { createIcon } from "../runtime/createIcon.js";

export const Images = createIcon("Images", "images", {
  nodes: [
    ["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" }, { r: "draw", d: 0.2, o: [16.5, 12.497] }],
    ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }, { r: "slide", x: -1, y: 1, a: 1, o: [9, 15] }],
    ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor" }, { r: "pop", d: 0.15, o: [13, 7] }],
    ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2" }, { r: "slide", x: 1, y: -1, a: 1, o: [15, 9] }],
  ],
});
