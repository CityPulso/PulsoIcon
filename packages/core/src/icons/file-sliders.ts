import { icon } from "../icon.js";

export const FileSliders = icon("FileSliders", "file-sliders", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 12h8" }, { r: "fade", d: 0.1, o: [12, 14.5] }],
    ["path", { d: "M10 11v2" }, { r: "slide", d: 0.1, x: 1, a: 2, o: [10, 12] }],
    ["path", { d: "M8 17h8" }, { r: "fade", d: 0.1, o: [12, 14.5] }],
    ["path", { d: "M14 16v2" }, { r: "slide", d: 0.1, x: -1, a: 2, o: [14, 17] }],
  ],
});
