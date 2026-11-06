import { icon } from "../icon.js";

export const UserArrowDownLeft = icon("UserArrowDownLeft", "user-arrow-down-left", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.05, a: 1, o: [9, 18] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 7] }],
    ["path", { d: "M22 6l-5 5" }, { r: "slide", d: 0.1, x: -1, y: 1, a: 1.5, o: [19.5, 8.5] }],
    ["path", { d: "M17 7v4h4" }, { r: "slide", d: 0.1, x: -1, y: 1, a: 1.5, o: [19.5, 8.5] }],
  ],
});
