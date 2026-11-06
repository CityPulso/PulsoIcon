import { icon } from "../icon.js";

export const ParentChild = icon("ParentChild", "parent-child", {
  nodes: [
    ["circle", { cx: "8", cy: "6", r: "3" }, { r: "float", a: 1.5, o: [8, 6] }],
    ["path", { d: "M2 21v-3a6 6 0 0 1 10-4.5" }, { r: "rise", d: 0.08, a: 1, o: [7, 17] }],
    ["circle", { cx: "17.5", cy: "11.5", r: "2.5" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [17.5, 11.5] }],
    ["path", { d: "M13 21a4.5 4.5 0 0 1 9 0" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [17.5, 19] }],
  ],
});
