import { icon } from "../icon.js";

export const MoveHorizontal = icon("MoveHorizontal", "move-horizontal", {
  nodes: [
    ["path", { d: "m18 8 4 4-4 4" }, { r: "slide", x: 1, a: 1.5, o: [20, 12] }],
    ["path", { d: "M2 12h20" }, { r: "jelly", a: 0.06, o: [12, 12] }],
    ["path", { d: "m6 8-4 4 4 4" }, { r: "slide", x: -1, a: 1.5, o: [4, 12] }],
  ],
});
