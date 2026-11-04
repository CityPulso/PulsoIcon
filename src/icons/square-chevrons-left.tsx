import { createIcon } from "../runtime/createIcon.js";

export const SquareChevronsLeft = createIcon("SquareChevronsLeft", "square-chevrons-left", {
  nodes: [
    ["path", { d: "M10 9L7 12L10 15" }, { r: "slide", d: 0.08, x: -1, a: 2, o: [8.5, 12] }],
    ["path", { d: "M16 9L13 12L16 15" }, { r: "slide", x: -1, a: 2, o: [14.5, 12] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
