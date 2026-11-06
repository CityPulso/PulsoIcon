import { icon } from "../icon.js";

export const Combine = icon("Combine", "combine", {
  nodes: [
    ["path", { d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }, { r: "slide", d: 0.05, y: 1, a: 1, o: [17, 6.5] }],
    ["path", { d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }, { r: "slide", d: 0.05, y: 1, a: 1, o: [17, 6.5] }],
    ["path", { d: "m7 15 3 3" }, { r: "draw", d: 0.2, o: [8.5, 16.5] }],
    ["path", { d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [6.5, 17.5] }],
    ["rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" }, { r: "stamp", d: 0.2, a: 0.3, o: [17.5, 17.5] }],
    ["rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [6.5, 6.5] }],
  ],
});
