import { icon } from "../icon.js";

export const Archery = icon("Archery", "archery", {
  nodes: [
    ["circle", { cx: "5", cy: "5", r: "1" }, { r: "float", a: 0.8, o: [5, 5] }],
    ["path", { d: "M5 9v5" }, { r: "press", a: 0.04, o: [5, 21] }],
    ["path", { d: "m2.5 21 2.5-7 2.5 7" }, { r: "press", a: 0.04, o: [5, 21] }],
    ["path", { d: "M15 3a9 9 0 0 1 0 12" }, { r: "press", a: 0.06, o: [15, 9] }],
    ["path", { d: "M15 3 10 9l5 6" }, { r: "press", a: 0.06, o: [15, 9] }],
    ["path", { d: "M5 9h16" }, { r: "shoot", d: 0.25, x: 1, a: 4, o: [13, 9] }],
    ["path", { d: "m19 7 2 2-2 2" }, { r: "shoot", d: 0.25, x: 1, a: 4, o: [13, 9] }],
  ],
});
