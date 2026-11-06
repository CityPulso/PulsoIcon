import { icon } from "../icon.js";

export const Transgender = icon("Transgender", "transgender", {
  nodes: [
    ["path", { d: "M12 16v6" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 19] }],
    ["path", { d: "M14 20h-4" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 19] }],
    ["path", { d: "M18 2h4v4" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.5, o: [18.415, 5.585] }],
    ["path", { d: "m2 2 7.17 7.17" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1.5, o: [5.585, 5.585] }],
    ["path", { d: "M2 5.355V2h3.357" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1.5, o: [5.585, 5.585] }],
    ["path", { d: "m22 2-7.17 7.17" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.5, o: [18.415, 5.585] }],
    ["path", { d: "M8 5 5 8" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1.5, o: [5.585, 5.585] }],
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "press", a: 0.06, o: [12, 12] }],
  ],
});
