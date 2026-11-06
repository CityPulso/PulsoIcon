import { icon } from "../icon.js";

export const ListClock = icon("ListClock", "list-clock", {
  nodes: [
    ["path", { d: "M16 13v2.2l1.6 1" }, { r: "spin", d: 0.1, a: 360, o: [16, 15] }],
    ["path", { d: "M3 12h3.458" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M3 19h3.832" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M3 5h18" }, { r: "growX", o: [3, 12] }],
    ["circle", { cx: "16", cy: "15", r: "6" }, { r: "pulse", d: 0.1, a: 0.05, o: [16, 15] }],
  ],
});
