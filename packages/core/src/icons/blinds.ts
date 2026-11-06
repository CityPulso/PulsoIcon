import { icon } from "../icon.js";

export const Blinds = icon("Blinds", "blinds", {
  nodes: [
    ["path", { d: "M3 3h18" }],
    ["path", { d: "M20 7H8" }, { r: "growX", o: [20, 10] }],
    ["path", { d: "M20 11H8" }, { r: "growX", d: 0.06, o: [20, 10] }],
    ["path", { d: "M10 19h10" }, { r: "growX", d: 0.12, o: [20, 10] }],
    ["path", { d: "M8 15h12" }, { r: "growX", d: 0.18, o: [20, 10] }],
    ["path", { d: "M4 3v14" }, { r: "slide", y: 1, a: 2, o: [4, 12] }],
    ["circle", { cx: "4", cy: "19", r: "2" }, { r: "slide", y: 1, a: 2, o: [4, 12] }],
  ],
});
