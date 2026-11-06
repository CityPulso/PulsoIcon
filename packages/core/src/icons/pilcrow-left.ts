import { icon } from "../icon.js";

export const PilcrowLeft = icon("PilcrowLeft", "pilcrow-left", {
  text: true,
  nodes: [
    ["path", { d: "M14 3v11" }, { r: "press", a: 0.06, o: [14, 8.5] }],
    ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }, { r: "press", a: 0.06, o: [14, 8.5] }],
    ["path", { d: "M18 3v11" }, { r: "press", a: 0.06, o: [14, 8.5] }],
    ["path", { d: "M22 18H2l4-4" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 16] }],
    ["path", { d: "m6 22-4-4" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [4, 20] }],
  ],
});
