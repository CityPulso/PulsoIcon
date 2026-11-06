import { icon } from "../icon.js";

export const Toaster = icon("Toaster", "toaster", {
  nodes: [
    ["path", { d: "M6 11V6.5a2 2 0 0 1 4 0V11" }, { r: "rise", a: 4, o: [8, 8] }],
    ["path", { d: "M13 11V6.5a2 2 0 0 1 4 0V11" }, { r: "rise", d: 0.08, a: 4, o: [15, 8] }],
    ["rect", { x: "2", y: "11", width: "20", height: "10", rx: "2" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M17 15h2" }, { r: "slide", y: 1, a: 1.5, o: [18, 15] }],
  ],
});
