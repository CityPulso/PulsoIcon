import { icon } from "../icon.js";

export const SquareDimensions = icon("SquareDimensions", "square-dimensions", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 7H7v5" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1, o: [9.5, 9.5] }],
    ["path", { d: "M12 17h5v-5" }, { r: "slide", d: 0.05, x: 1, y: 1, a: 1, o: [14.5, 14.5] }],
  ],
});
