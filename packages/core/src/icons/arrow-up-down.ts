import { icon } from "../icon.js";

export const ArrowUpDown = icon("ArrowUpDown", "arrow-up-down", {
  nodes: [
    ["path", { d: "m21 16-4 4-4-4" }, { r: "slide", y: 1, a: 2, o: [17, 12] }],
    ["path", { d: "M17 20V4" }, { r: "slide", y: 1, a: 2, o: [17, 12] }],
    ["path", { d: "m3 8 4-4 4 4" }, { r: "slide", y: -1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 4v16" }, { r: "slide", y: -1, a: 2, o: [7, 12] }],
  ],
});
