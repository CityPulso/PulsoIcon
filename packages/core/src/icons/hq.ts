import { icon } from "../icon.js";

export const Hq = icon("Hq", "hq", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 9v6" }, { r: "grow", d: 0.1, o: [6, 12] }],
    ["path", { d: "M10 9v6" }, { r: "grow", d: 0.16, o: [10, 12] }],
    ["path", { d: "M6 12h4" }, { r: "growX", d: 0.2, o: [8, 12] }],
    ["circle", { cx: "15.5", cy: "12", r: "3" }, { r: "draw", d: 0.25, o: [15.5, 12] }],
    ["path", { d: "m16.5 13.5 2 2" }, { r: "draw", d: 0.4, o: [17.5, 14.5] }],
  ],
});
