import { icon } from "../icon.js";

export const Ligature = icon("Ligature", "ligature", {
  nodes: [
    ["path", { d: "M14 12h2v8" }, { r: "draw", d: 0.25, o: [16, 16] }],
    ["path", { d: "M14 20h4" }, { r: "draw", d: 0.25, o: [16, 16] }],
    ["path", { d: "M6 12h4" }, { r: "growX", d: 0.15, o: [8, 12] }],
    ["path", { d: "M6 20h4" }, { r: "growX", d: 0.21, o: [8, 20] }],
    ["path", { d: "M8 20V8a4 4 0 0 1 7.464-2" }, { r: "draw", o: [11.732, 12] }],
  ],
});
