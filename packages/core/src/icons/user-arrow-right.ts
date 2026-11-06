import { icon } from "../icon.js";

export const UserArrowRight = icon("UserArrowRight", "user-arrow-right", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.05, a: 1, o: [9, 18] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 7] }],
    ["path", { d: "M16 11h6" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [19, 11] }],
    ["path", { d: "m19 8 3 3-3 3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [19, 11] }],
  ],
});
