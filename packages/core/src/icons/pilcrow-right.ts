import { icon } from "../icon.js";

export const PilcrowRight = icon("PilcrowRight", "pilcrow-right", {
  text: true,
  nodes: [
    ["path", { d: "M10 3v11" }, { r: "press", a: 0.06, o: [9.5, 8.5] }],
    ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }, { r: "press", a: 0.06, o: [9.5, 8.5] }],
    ["path", { d: "M14 3v11" }, { r: "press", a: 0.06, o: [9.5, 8.5] }],
    ["path", { d: "m18 14 4 4H2" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 16] }],
    ["path", { d: "m22 18-4 4" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [20, 20] }],
  ],
});
