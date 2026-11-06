import { icon } from "../icon.js";

export const Rhythm = icon("Rhythm", "rhythm", {
  nodes: [
    ["path", { d: "M7 17V4h12v13" }, { r: "press", a: 0.04, o: [13, 10] }],
    ["path", { d: "M13 17V4" }, { r: "press", a: 0.04, o: [13, 10] }],
    ["circle", { cx: "5", cy: "17", r: "2" }, { r: "bounce", y: -1, a: 1.5, o: [5, 17] }],
    ["circle", { cx: "11", cy: "17", r: "2" }, { r: "bounce", d: 0.12, y: -1, a: 1.5, o: [11, 17] }],
    ["circle", { cx: "17", cy: "17", r: "2" }, { r: "bounce", d: 0.24, y: -1, a: 1.5, o: [17, 17] }],
  ],
});
