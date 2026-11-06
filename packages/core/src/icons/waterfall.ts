import { icon } from "../icon.js";

export const Waterfall = icon("Waterfall", "waterfall", {
  nodes: [
    ["path", { d: "M2 4h4" }, { r: "growX", o: [4, 4] }],
    ["path", { d: "M6 4h1a2 2 0 0 1 2 2v10" }, { r: "shoot", d: 0, y: 1, a: 2, o: [8, 11] }],
    ["path", { d: "M10 4h1a2 2 0 0 1 2 2v12" }, { r: "shoot", d: 0.1, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M14 4h1a2 2 0 0 1 2 2v10" }, { r: "shoot", d: 0.2, y: 1, a: 2, o: [16, 11] }],
    ["path", { d: "M18 4h4" }, { r: "growX", o: [20, 4] }],
    ["path", { d: "M2 21q2.5 1.5 5 0t5 0 5 0 5 0" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 21] }],
  ],
});
