import { icon } from "../icon.js";

export const RotateCwSquare = icon("RotateCwSquare", "rotate-cw-square", {
  nodes: [
    ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [8, 6] }],
    ["path", { d: "m9 8 3-3-3-3" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [8, 6] }],
    ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
