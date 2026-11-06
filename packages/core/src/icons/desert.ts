import { icon } from "../icon.js";

export const Desert = icon("Desert", "desert", {
  nodes: [
    ["circle", { cx: "17", cy: "6", r: "3" }, { r: "rise", a: 3, o: [17, 6] }],
    ["path", { d: "M2 21c3-3 6.5-4 10-3s7 2 10 0" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [12, 19] }],
    ["path", { d: "M7 17V9" }, { r: "sway", d: 0.15, a: 6, o: [7, 17] }],
    ["path", { d: "M7 13H5.5A1.5 1.5 0 0 1 4 11.5V10" }, { r: "sway", d: 0.15, a: 6, o: [7, 17] }],
    ["path", { d: "M7 12h1.5a1.5 1.5 0 0 0 1.5-1.5V9" }, { r: "sway", d: 0.15, a: 6, o: [7, 17] }],
  ],
});
