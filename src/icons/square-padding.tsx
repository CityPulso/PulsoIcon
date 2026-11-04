import { createIcon } from "../runtime/createIcon.js";

export const SquarePadding = createIcon("SquarePadding", "square-padding", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 17h-4" }, { r: "slide", d: 0.15, y: -1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M14 7h-4" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M17 14v-4" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [17, 12] }],
    ["path", { d: "M7 14v-4" }, { r: "slide", d: 0.2, x: 1, a: 1.5, o: [7, 12] }],
  ],
});
