import { icon } from "../icon.js";

export const Bridge = icon("Bridge", "bridge", {
  nodes: [
    ["path", { d: "M10 9.728V16" }, { r: "grow", d: 0.15, o: [10, 12.864] }],
    ["path", { d: "M14 9.728V16" }, { r: "grow", d: 0.2, o: [14, 12.864] }],
    ["path", { d: "M18 20V4" }, { r: "grow", d: 0.25, o: [18, 12] }],
    ["path", { d: "m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4" }, { r: "redraw", o: [12, 9] }],
    ["path", { d: "M22 16H2" }, { r: "growX", d: 0.3, o: [12, 16] }],
    ["path", { d: "M6 20V4" }, { r: "grow", d: 0.3, o: [6, 12] }],
  ],
});
