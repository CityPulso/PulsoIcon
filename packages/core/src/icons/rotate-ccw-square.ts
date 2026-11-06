import { icon } from "../icon.js";

export const RotateCcwSquare = icon("RotateCcwSquare", "rotate-ccw-square", {
  nodes: [
    ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [16, 5.5] }],
    ["path", { d: "m15 2-3 3 3 3" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [16, 5.5] }],
    ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }, { r: "spin", a: -90, o: [12, 12] }],
  ],
});
