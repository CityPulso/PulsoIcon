import { icon } from "../icon.js";

export const Cycling = icon("Cycling", "cycling", {
  nodes: [
    ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }, { r: "spin", a: 360, o: [18.5, 17.5] }],
    ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }, { r: "spin", a: 360, o: [5.5, 17.5] }],
    ["circle", { cx: "14", cy: "3.5", r: "1" }, { r: "float", a: 1, o: [14, 3.5] }],
    ["path", { d: "M5.5 17.5 9 11h6l3.5 6.5" }, { r: "slide", x: 1, a: 0.6, o: [12, 14] }],
    ["path", { d: "m9 11 3 6.5" }, { r: "slide", x: 1, a: 0.6, o: [12, 14] }],
    ["path", { d: "M13 6.5 9 11" }, { r: "float", a: 1, o: [12, 8] }],
    ["path", { d: "m11.5 8 3.5 3" }, { r: "float", a: 1, o: [12, 8] }],
  ],
});
