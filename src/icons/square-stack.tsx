import { createIcon } from "../runtime/createIcon.js";

export const SquareStack = createIcon("SquareStack", "square-stack", {
  nodes: [
    ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }, { r: "fade", d: 0.1, o: [6, 6] }],
    ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }, { r: "slide", d: 0.05, x: 1, y: 1, a: 0.5, o: [12, 12] }],
    ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }, { r: "slide", x: 1, y: 1, a: 1, o: [18, 18] }],
  ],
});
