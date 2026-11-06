import { icon } from "../icon.js";

export const UserCrown = icon("UserCrown", "user-crown", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.05, a: 1, o: [9, 18] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 7] }],
    ["path", { d: "M16.5 13 16 8l2 1.5 1-2.5 1 2.5 2-1.5-.5 5z" }, { r: "twinkle", d: 0.15, o: [19, 10.5] }],
  ],
});
