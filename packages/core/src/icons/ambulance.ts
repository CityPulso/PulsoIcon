import { icon } from "../icon.js";

export const Ambulance = icon("Ambulance", "ambulance", {
  nodes: [
    ["path", { d: "M10 10H6" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M8 8v4" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M9 18h6" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["circle", { cx: "17", cy: "18", r: "2" }, { r: "spin", a: 360, o: [17, 18] }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", a: 360, o: [7, 18] }],
  ],
  solid: [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1z" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M14 8h2.382a1 1 0 0 1 .894.553l1.539 3.076a1 1 0 0 0 .578.502l1.923.641a1 1 0 0 1 .684.948V17a1 1 0 0 1-1 1H14z" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M10 10H6" }, { r: "slide", x: 1, a: 1, o: [12, 11] }, "cut"],
    ["path", { d: "M8 8v4" }, { r: "slide", x: 1, a: 1, o: [12, 11] }, "cut"],
    ["circle", { cx: "17", cy: "18", r: "4" }, { r: "spin", a: 360, o: [17, 18] }, "cut"],
    ["circle", { cx: "7", cy: "18", r: "4" }, { r: "spin", a: 360, o: [7, 18] }, "cut"],
    ["circle", { cx: "17", cy: "18", r: "2" }, { r: "spin", a: 360, o: [17, 18] }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", a: 360, o: [7, 18] }],
  ],
});
