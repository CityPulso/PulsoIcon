import { createIcon } from "../runtime/createIcon.js";

export const UserBan = createIcon("UserBan", "user-ban", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "float", a: 1.5, o: [9, 12] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 12] }],
    ["circle", { cx: "19", cy: "11", r: "3" }, { r: "pop", d: 0.1, o: [19, 11] }],
    ["path", { d: "m16.88 8.88 4.24 4.24" }, { r: "draw", d: 0.25, o: [19, 11] }],
  ],
});
