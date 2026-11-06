import { icon } from "../icon.js";

export const Fullscreen = icon("Fullscreen", "fullscreen", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "slide", x: -1, y: -1, a: 1, o: [5, 5] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 1, y: -1, a: 1, o: [19, 5] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "slide", x: 1, y: 1, a: 1, o: [19, 19] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "slide", x: -1, y: 1, a: 1, o: [5, 19] }],
    ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }, { r: "pulse", a: 0.1, o: [12, 12] }],
  ],
});
