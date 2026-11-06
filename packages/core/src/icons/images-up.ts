import { icon } from "../icon.js";

export const ImagesUp = icon("ImagesUp", "images-up", {
  nodes: [
    ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }, { r: "slide", x: -1, y: 1, a: 1, o: [9, 15] }],
    ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [15, 9] }],
    ["path", { d: "m12 9 3-3 3 3" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [15, 9] }],
    ["path", { d: "M15 6v6.5" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [15, 9] }],
  ],
});
