import { icon } from "../icon.js";

export const UserBag = icon("UserBag", "user-bag", {
  nodes: [
    ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["path", { d: "M14 15h8v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" }, { r: "swing", d: 0.1, a: 10, o: [18, 12] }],
    ["path", { d: "M16 15v-1a2 2 0 0 1 4 0v1" }, { r: "swing", d: 0.1, a: 10, o: [18, 12] }],
  ],
});
