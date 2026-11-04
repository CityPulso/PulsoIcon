import { createIcon } from "../runtime/createIcon.js";

export const UserGroup = createIcon("UserGroup", "user-group", {
  nodes: [
    ["path", { d: "M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1" }, { r: "float", a: 1.5, o: [12, 14.5] }],
    ["path", { d: "M19 10h1a2 2 0 012 2v1" }, { r: "float", d: 0.1, a: 1.5, o: [19, 7.5] }],
    ["path", { d: "M5 10H4a2 2 0 00-2 2v1" }, { r: "float", d: 0.2, a: 1.5, o: [5, 7.5] }],
    ["circle", { cx: "12", cy: "11", r: "3" }, { r: "float", a: 1.5, o: [12, 14.5] }],
    ["circle", { cx: "18", cy: "4", r: "2" }, { r: "float", d: 0.1, a: 1.5, o: [19, 7.5] }],
    ["circle", { cx: "6", cy: "4", r: "2" }, { r: "float", d: 0.2, a: 1.5, o: [5, 7.5] }],
  ],
});
