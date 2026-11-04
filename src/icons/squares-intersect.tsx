import { createIcon } from "../runtime/createIcon.js";

export const SquaresIntersect = createIcon("SquaresIntersect", "squares-intersect", {
  nodes: [
    ["path", { d: "M10 22a2 2 0 0 1-2-2" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M14 2a2 2 0 0 1 2 2" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 6] }],
    ["path", { d: "M16 22h-2" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M2 10V8" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 6] }],
    ["path", { d: "M2 4a2 2 0 0 1 2-2" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 6] }],
    ["path", { d: "M20 8a2 2 0 0 1 2 2" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M22 14v2" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M22 20a2 2 0 0 1-2 2" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M4 16a2 2 0 0 1-2-2" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 15] }],
    ["path", { d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M8 2h2" }, { r: "slide", x: -1, y: -1, a: 1, o: [9, 6] }],
  ],
});
