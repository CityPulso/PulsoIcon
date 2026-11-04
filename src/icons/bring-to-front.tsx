import { createIcon } from "../runtime/createIcon.js";

export const BringToFront = createIcon("BringToFront", "bring-to-front", {
  nodes: [
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }, { r: "stamp", a: 0.3, o: [12, 12] }],
    ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [6, 6] }],
    ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [18, 18] }],
  ],
});
