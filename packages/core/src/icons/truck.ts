import { icon } from "../icon.js";

export const Truck = icon("Truck", "truck", {
  nodes: [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M15 18H9" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }, { r: "slide", x: 1, a: 1, o: [12, 11] }],
    ["circle", { cx: "17", cy: "18", r: "2" }, { r: "spin", a: 360, o: [17, 18] }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", a: 360, o: [7, 18] }],
  ],
});
