import { createIcon } from "../runtime/createIcon.js";

export const UserMinus = createIcon("UserMinus", "user-minus", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.05, a: 1, o: [9, 18] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 7] }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }, { r: "growX", d: 0.15, o: [19, 11] }],
  ],
});
