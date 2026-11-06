import { icon } from "../icon.js";

export const LayersArrowDown = icon("LayersArrowDown", "layers-arrow-down", {
  nodes: [
    ["path", { d: "M12 7v15" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 14.5] }],
    ["path", { d: "M2 12a1 1 0 00.58.91l5.093 2.316" }, { r: "press", d: 0.05, a: 0.05, o: [12, 13.614] }],
    ["path", { d: "M22 12a1 1 0 01-.59.92l-5.077 2.308" }, { r: "press", d: 0.05, a: 0.05, o: [12, 13.614] }],
    ["path", { d: "M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45" }, { r: "float", a: 1, o: [12.01, 6.185] }],
    ["path", { d: "m9 19 3 3 3-3" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 14.5] }],
  ],
});
