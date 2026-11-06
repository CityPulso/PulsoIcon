import { icon } from "../icon.js";

export const FileSvg = icon("FileSvg", "file-svg", {
  text: true,
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M7 15H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3" }, { r: "draw", d: 0.1, o: [5, 18] }],
    ["path", { d: "M10 15l2 6 2-6" }, { r: "draw", d: 0.17, o: [12, 18] }],
    ["path", { d: "M21 15H18.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H21V18H19.5" }, { r: "draw", d: 0.24, o: [19, 18] }],
  ],
});
