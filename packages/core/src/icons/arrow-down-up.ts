import { icon } from "../icon.js";

export const ArrowDownUp = icon("ArrowDownUp", "arrow-down-up", {
  nodes: [
    ["path", { d: "m3 16 4 4 4-4" }, { r: "slide", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 20V4" }, { r: "slide", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "m21 8-4-4-4 4" }, { r: "slide", y: -1, a: 2, o: [17, 12] }],
    ["path", { d: "M17 4v16" }, { r: "slide", y: -1, a: 2, o: [17, 12] }],
  ],
});
