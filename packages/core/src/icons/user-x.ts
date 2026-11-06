import { icon } from "../icon.js";

export const UserX = icon("UserX", "user-x", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "float", a: 1.5, o: [9, 12] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 12] }],
    ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }, { r: "draw", d: 0.1, o: [19.5, 10.5] }],
    ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }, { r: "draw", d: 0.2, o: [19.5, 10.5] }],
  ],
});
