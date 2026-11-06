import { icon } from "../icon.js";

export const MirrorRectangular = icon("MirrorRectangular", "mirror-rectangular", {
  nodes: [
    ["path", { d: "M11 6 8 9" }, { r: "twinkle", d: 0.1, o: [12, 10] }],
    ["path", { d: "m16 7-8 8" }, { r: "twinkle", d: 0.1, o: [12, 10] }],
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
