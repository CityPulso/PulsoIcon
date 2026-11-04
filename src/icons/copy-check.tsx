import { createIcon } from "../runtime/createIcon.js";

export const CopyCheck = createIcon("CopyCheck", "copy-check", {
  nodes: [
    ["path", { d: "m12 15 2 2 4-4" }, { r: "draw", d: 0.15, o: [15, 15] }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }, { r: "press", a: 0.05, o: [15, 15] }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 9] }],
  ],
});
