import { icon } from "../icon.js";

export const ArrowUpDouble = icon("ArrowUpDouble", "arrow-up-double", {
  nodes: [
    ["path", { d: "M12 20V4" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "m7 14 5-5 5 5" }, { r: "slide", d: 0.15, y: -1, a: 1.5, o: [12, 11.5] }],
    ["path", { d: "m7 9 5-5 5 5" }, { r: "slide", d: 0.25, y: -1, a: 1.5, o: [12, 6.5] }],
  ],
});
