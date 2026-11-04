import { createIcon } from "../runtime/createIcon.js";

export const UserCheck = createIcon("UserCheck", "user-check", {
  nodes: [
    ["path", { d: "m16 11 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 11] }],
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.05, a: 1, o: [9, 18] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 7] }],
  ],
});
