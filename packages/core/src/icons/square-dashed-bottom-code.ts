import { icon } from "../icon.js";

export const SquareDashedBottomCode = icon("SquareDashedBottomCode", "square-dashed-bottom-code", {
  nodes: [
    ["path", { d: "M10 9.5 8 12l2 2.5" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [9, 12] }],
    ["path", { d: "M14 21h1" }, { r: "fade", d: 0.16, o: [12, 21] }],
    ["path", { d: "m14 9.5 2 2.5-2 2.5" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [15, 12] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 21h1" }, { r: "fade", d: 0.1, o: [12, 21] }],
  ],
});
