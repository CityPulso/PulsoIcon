import { icon } from "../icon.js";

export const Agile = icon("Agile", "agile", {
  nodes: [
    ["path", { d: "M11 18a7 7 0 1 1 7-7" }, { r: "spin", o: [11, 11] }],
    ["path", { d: "m15 8 3 3 3-3" }, { r: "spin", o: [11, 11] }],
    ["path", { d: "M11 18h10" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [16, 18] }],
    ["path", { d: "m18 15 3 3-3 3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [16, 18] }],
  ],
});
